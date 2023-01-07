import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button, Text, ArrowDownIcon, Alert, useModal,Message } from 'dbx-swap-uikit'

import { Wrapper } from 'views/Swap/components/styleds'
import { AutoColumn } from 'components/Layout/Column'
import { AutoRow } from 'components/Layout/Row'
import Select from 'components/Select/Select'
// import Select from 'react-select'
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'
import Page from '../Page'
import { AppBody } from '../../components/App'
import { networkOptions, networkOptionsA, tokenOptions,currencies } from './config'
import { toHex } from './utils/utils'
import { assets, networkParams, SCALLOP_CHAINID } from './utils/constant'
import { approve,approveDbx, deposit, depositScallop } from './utils/index'

const StyledInput = styled.input<{ error?: boolean; fontSize?: string; align?: string }>`
  color: ${({ error, theme }) => (error ? theme.colors.failure : theme.colors.text)};
  width: 50%;
  height: 70px;
  // position: relative;
  font-weight: 500;
  outline: none;
  border: solid #314859;
  border-radius: 20px;
  flex: 1 1 auto;
  background-color: #314859;
  font-size: 19px;
  text-align: ${({ align }) => align && align};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 20px;
  -webkit-appearance: textfield;
  z-index: 1;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  [type='number'] {
    -moz-appearance: textfield;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }
`

const MessageContent = styled(Text)`
  color: ${({ theme }) => (theme.isDark ? '#D6D7E399' : '#19274B99')};
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
`

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 64px);
  -webkit-box-align: center;
  align-items: center;
  flex: 1 1 0%;
  overflow: hidden auto;
  z-index: 1;
  background: ${({ theme }) => (theme.isDark ? '#1e2c37' : '#E5E5E5')};
  // background-image: ${({ theme }) => (theme.isDark ? `url('/images/black.png')` : `url('/images/light.png')`)};
  // background-repeat: no-repeat;
  // background-position: center top;
`
const StyledButton = styled(Button).attrs({ variant: 'text', scale: 'sm' })`
  background-color: #c63458;
  border-radius: 32px;
  color: white;
  padding: 12px 0px;
  width: 100%;
  border-radius: 32px;
  text-align: center;
  border: 1px solid transparent;
  font-weight: 500;
  font-size: 17px;
  line-height: 26px;
  letter-spacing: 0.01em;
  text-transform: none;
  height: 3.3vw;
  min-height: 40px;
  margin: 0px !important;
  box-shadow: none;
`
const Boxs = styled.div`
  position:relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: stretch;
`

const Home: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<any>({ value: 1, label: 'Ethereum' })
  const [toSelectedOption, setToSelectedOption] = useState<any>({ value: 5348, label: 'DBX' })
  const [web3modal, setWeb3Modal] = useState<any>({})
  const [provider, setProvider] = useState<any>()
  const [account, setAccount] = useState<string>()
  const [chainId, setChainId] = useState<number>()
  const [error, setError] = useState<any>('')
  const [fromChain, setFromChain] = useState<number>(1)
  const [toChain, setToChain] = useState<number>(5348)
  const [library, setLibrary] = useState<any>()
  const [amount, setAmount] = useState<any>()
  const [isApproved, setApproved] = useState<boolean>(false)
  const [asset, setAsset] = useState<any>(assets[0])
  const [networkOptions_, setNetworkOptions_] = useState<any>(networkOptions)
  const [options, setOptions] = useState<any>(tokenOptions)
  let bridgeNetwork: any
  const handleBridgeAction = () => {
    return 0
  }

  const enforce = (data: string) => {
    setAmount(parseFloat(data))
    return 0
  }
  const refreshState = () => {
    setAccount(null)
    setChainId(null)
    // setFromChain(SCALLOP_CHAINID)
  }

  useEffect(() => {
    const providerOptions: any = {}

    if (typeof window !== 'undefined') {
      const _web3modal = new Web3Modal({
        network: 'mainnet', // optional
        cacheProvider: true, // optional
        providerOptions, // required,
      })
      setWeb3Modal(_web3modal)
    }
  }, [])

  const connectWallet = async () => {
    try {
      const provider_ = await web3modal.connect()
      const library_ = new ethers.providers.Web3Provider(provider_, 'any')
      const accounts = await library_.listAccounts()
      const network = await library_.getNetwork()
      setProvider(provider_)
      setLibrary(library_)
      if (accounts) setAccount(accounts[0])
      setChainId(network.chainId)
    } catch (error_) {
      setError(error_)
    }
  }

  useEffect(() => {
    const disconnect = async () => {
      const web3modal1 = new Web3Modal({
        network: 'mainnet', // optional
        cacheProvider: true, // optional
        providerOptions: {}, // required
      })
      await web3modal1.clearCachedProvider()
      refreshState()
    }
    if (provider?.on) {
      const handleAccountsChanged = (accounts: any) => {
        if (accounts) setAccount(accounts[0])
      }

      const handleChainChanged = (_hexChainId) => {
        setChainId(parseInt(_hexChainId))
      }

      const handleDisconnect = () => {
        disconnect()
      }

      provider.on('accountsChanged', handleAccountsChanged)
      provider.on('chainChanged', handleChainChanged)
      provider.on('disconnect', handleDisconnect)

      // return () => {
      //   if (provider.removeListener) {
      //     provider.removeListener('accountsChanged', handleAccountsChanged);
      //     provider.removeListener('chainChanged', handleChainChanged);
      //     provider.removeListener('disconnect', handleDisconnect);
      //   }
      // };
    }
  }, [provider])

  // const prevChains: any = usePrevious({ fromChain, toChain })
  // useEffect(() => {
  //   if (fromChain === toChain) {
  //     setToChain(prevChains?.FromChain)
  //   }
  // }, [fromChain,toChain,prevChains?.FromChain])

  // useEffect(() => {
  //   if (fromChain === toChain) {
  //     setFromChain(prevChains?.toChain);
  //   }
  // }, [toChain]);

  useEffect(() => {
    setFromChain(parseInt(selectedOption.value))
  }, [selectedOption])

  useEffect(() => {
    setToChain(parseInt(toSelectedOption.value))
  }, [toSelectedOption])


  useEffect(() => {
   
      setApproved(false)    
  },[fromChain])
  const handleAmount = (e: any) => {
    const amount_ = e.target.value
    if (!amount_ || amount_.match(/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/)) {
      setAmount(amount_)
    }
  }
  const handleFromChain = (e: any) => {
    const id = e.target.value
    setFromChain(parseInt(id))
  }

  const handleToChain = (e: any) => {
    const id = e.target.value
    setToChain(id)
  }

  const switchNetwork = async (chainId_: number) => {
    try {
      await library.provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: toHex(chainId_) }],
      })
    } catch (switchError: any) {
      if (switchError?.code === 4902) {
        const orgParams = networkParams[toHex(chainId_)]

        const params = {
          chainId: `0x${Number(orgParams.chainId).toString(16)}`,
          rpcUrls: [...orgParams.rpcUrls],
          chainName: orgParams.chainName,
          nativeCurrency: orgParams.nativeCurrency,
          blockExplorerUrls: orgParams.blockExplorerUrls,
          iconUrls: orgParams.iconUrls,
        }
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [params],
          })
        } catch (_error) {
          setError(_error)
        }
      }
    }
  }

  const handleApprove = async (): Promise<boolean> => {
    console.log(fromChain, toChain)
    if (chainId !== fromChain) {
      await switchNetwork(fromChain)

      return false
    }

    if (fromChain === toChain) {
      
      window.alert('Can not bridge on same Chain')
      return false
    }
    if (fromChain !== 5348 && toChain !== 5348) {
      window.alert('Can not bridge for these chains')
      return false
    }

    const signer = library.getSigner()

    const ethBalanceHex_ = await signer.getBalance()
    const ethBalance = ethers.utils.formatEther(ethBalanceHex_)
    console.log("ether balance",ethBalance)
    if (!amount) {
      window.alert('Please input token amount to transfer!')
      return false
    }

    if (parseFloat(ethBalance) === 0) {
      window.alert("You don't have enough ether!")
      return false
    }
    if (fromChain === SCALLOP_CHAINID ) {
      bridgeNetwork = toChain
    } else {
      bridgeNetwork = fromChain
    }

    let res:number;

    if (fromChain !== SCALLOP_CHAINID && fromChain !== 1) {
      res = await approve(
        amount,
        assets[toHex(bridgeNetwork)].address[toHex(chainId)],
        bridgeNetwork,
        chainId,
        signer,
      )
    } else {
      res = await approveDbx(
        amount,
        assets[toHex(bridgeNetwork)].address[toHex(chainId)],
        bridgeNetwork,
        chainId,
        signer,
      )
    }
    if (res === 1) {
      window.alert(`Successfully approved ${amount} ${assets[toHex(bridgeNetwork)].symbol}`)
      setApproved(true)
    } else {
      window.alert('Approve failed!')
      setApproved(false)
    }
    return true
  }

  const handleDeposit = async (): Promise<boolean> => {
    if (chainId !== fromChain) {
      await switchNetwork(fromChain)
      return false
    }


    if (fromChain === toChain) {
      window.alert('Can not bridge on same Chain')
      return false
    }
    if (fromChain !== 5348 && toChain !== 5348) {
      window.alert('Can not bridge for these chains')
      return false
    }
    const signer = library.getSigner()
    const ethBalanceHex = await signer.getBalance()
    const ethBalance = ethers.utils.formatEther(ethBalanceHex)

    if (!amount) {
      window.alert('Please input token amount to transfer!')
      return false
    }

    if (ethBalance === '0') {
      window.alert("You don't have enough ether!")
      return false
    }

    if (fromChain === SCALLOP_CHAINID) {
      bridgeNetwork = toChain
    } else {
      bridgeNetwork = fromChain
    }
    console.log("herer",networkParams[toHex(toChain)].id)

    if (fromChain !== SCALLOP_CHAINID && fromChain !== 1) {
      await deposit(
        amount,
        networkParams[toHex(toChain)].id,
        bridgeNetwork,
        assets[toHex(bridgeNetwork)].resourceId,
        fromChain,
        signer,
      )
    } else {
      await depositScallop(
        amount,
        networkParams[toHex(toChain)].id,
        bridgeNetwork,
        assets[toHex(bridgeNetwork)].resourceId,
        fromChain,
        signer,
      )
    }
    setApproved(false)
    return true
  }

  return (
    <Page>
      <AppBody>
        <Wrapper>
          <AutoColumn>
            <Text style={{ paddingBottom: '30px' }}>Network</Text>
            <AutoRow gap="6px" justify="space-between">
              <Boxs>
                <Select options={networkOptions} onChange={setSelectedOption} />
                <Text style={{ alignSelf: 'center', paddingLeft: '5px' }}>From</Text>
              </Boxs>
              <Boxs>
                <Select options={networkOptionsA} onChange={setToSelectedOption} />
                <Text style={{ alignSelf: 'center', paddingLeft: '5px' }}>To</Text>
              </Boxs>
            </AutoRow>

            <Text style={{ paddingBottom: '30px', paddingTop: '30px' }}>Bridge</Text>

            <AutoRow gap="6px" justify="space-between">
              <StyledInput
                type="number"
                inputMode="numeric"
                pattern="^[0-9]*[.,]?[0-9]*$"
                placeholder="0.0 Input amount..."
                minLength={1}
                maxLength={79} 
                onChange={(event) => {
                  enforce(event.target.value.replace(/,/g, '.'))
                }}
               
              />
              {/* <Select options={tokenOptions} onChange={setSelectedOption} /> */}
           <Button style ={{"height":"60px"}}>{currencies[fromChain]}</Button>
            </AutoRow>
            <AutoRow style={{ paddingTop: '35px' }}>
              {chainId ? (
                isApproved ? (
                  <Button variant="success" onClick={handleDeposit} style ={{"zIndex":"0","height":"60px"}}>
                    {' '}
                    Deposit
                  </Button>
                ) : (
                  <Button variant="success" onClick={handleApprove} style ={{"zIndex":"0","height":"60px"}}>
                    {' '}
                    Approve
                  </Button>
                )
              ) : (
                <Button variant="success" onClick={connectWallet} style ={{"zIndex":"0","height":"60px"}}>
                  {' '}
                  Connect Wallet
                </Button>
              )}
            </AutoRow>
          </AutoColumn>
        </Wrapper>
      </AppBody>

      {/* <Button onClick={connectWallet} style={{ position: 'absolute', top: '2px', right: '-230px' }}>
        Connect wallet
      </Button> */}
    </Page>
  )
}
export default Home
