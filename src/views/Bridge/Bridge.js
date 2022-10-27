import React, { useEffect, useMemo, useState } from 'react';
import { usePrevious } from 'hooks';
import { makeStyles, useTheme } from '@mui/styles';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';
import styles from './styles';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  MenuItem,
  Paper,
  Select,
  Modal,
  TextField,
  Typography,
} from '@mui/material';

import { ethers } from 'ethers';
import Web3Modal from 'web3modal';

import { assets, networkParams, SCALLOP_CHAINID } from 'constants.js';
import { approve, getKycCredentials, deposit, depositScallop } from 'crypto/index';
import { toHex } from 'crypto/utils';

const Bridge = () => {
  // config theme
  const theme = useTheme();
  const useStyles = useMemo(() => {
    return makeStyles(styles, { defaultTheme: theme });
  }, [theme]);
  const classes = useStyles();

  // config modal
  const [open, setOpen] = useState(false);

  // config bridge params
  const [asset, setAsset] = useState(assets[0]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // config wallet connect
  const [web3Modal, setWeb3Modal] = useState({});
  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  const [account, setAccount] = useState();
  const [error, setError] = useState('');
  const [chainId, setChainId] = useState();

  const [amount, setAmount] = useState('');
  const [fromChain, setFromChain] = useState(SCALLOP_CHAINID);
  const [toChain, setToChain] = useState(80001);
  const [isApproved, setApproved] = useState(false);
  const prevChains = usePrevious({ fromChain, toChain });

  const providerOptions = {};

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const web3modal = new Web3Modal({
        network: 'mainnet', // optional
        cacheProvider: true, // optional
        providerOptions, // required
      });
      setWeb3Modal(web3modal);
    }
  }, []);

  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      const network = await library.getNetwork();
      setProvider(provider);
      setLibrary(library);
      if (accounts) setAccount(accounts[0]);
      setChainId(network.chainId);
    } catch (error) {
      setError(error);
    }
  };

  const handleAmount = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/)) {
      setAmount(amount);
    }
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleBirthday = (newValue) => {
    setBirthday(newValue);
  };

  const handleFromChain = (e) => {
    const id = e.target.value;
    setFromChain(id);
  };

  const handleToChain = (e) => {
    const id = e.target.value;
    setToChain(id);
  };

  const switchNetwork = async (chainId) => {
    try {
      await library.provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: toHex(chainId) }],
      });
    } catch (switchError) {
      console.log(switchError)
      if (switchError.code === 4902) {
        const orgParams = networkParams[toHex(chainId)];
        console.log(orgParams.hexChainId)
        const params = {
          chainId: `0x${Number(orgParams.chainId).toString(16)}`,
          rpcUrls: [...orgParams.rpcUrls],
          chainName: orgParams.chainName,
          nativeCurrency: orgParams.nativeCurrency,
          blockExplorerUrls: orgParams.blockExplorerUrls,
          iconUrls: orgParams.iconUrls,
        }
        try {
          // await library.provider.request({
          //   method: 'wallet_addEthereumChain',
          //   params: [params],
          // });
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [params]
          });
          console.log("over")
        } catch (error) {
          setError(error);
        }
      }
    }
  };

  const refreshState = () => {
    setAccount();
    setChainId();
    setFromChain(SCALLOP_CHAINID);
  };

  const disconnect = async () => {
    await web3Modal.clearCachedProvider();
    refreshState();
  };

  // useEffect(() => {
  //   if (web3Modal.cachedProvider) {
  //     connectWallet();
  //   }
  // }, []);

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts) => {
        console.log('accountsChanged', accounts);
        if (accounts) setAccount(accounts[0]);
      };

      const handleChainChanged = (_hexChainId) => {
        console.log('chainChanged', _hexChainId);
        setChainId(parseInt(_hexChainId, 16));
      };

      const handleDisconnect = () => {
        console.log('disconnect', error);
        disconnect();
      };

      provider.on('accountsChanged', handleAccountsChanged);
      provider.on('chainChanged', handleChainChanged);
      provider.on('disconnect', handleDisconnect);
      provider.on('connect', (info) => {
        console.log('connect', info);
      });

      return () => {
        if (provider.removeListener) {
          provider.removeListener('accountsChanged', handleAccountsChanged);
          provider.removeListener('chainChanged', handleChainChanged);
          provider.removeListener('disconnect', handleDisconnect);
        }
      };
    }
  }, [provider]);

  useEffect(() => {
    if (fromChain === toChain) {
      setToChain(prevChains.fromChain);
    }
  }, [fromChain]);

  useEffect(() => {
    if (fromChain === toChain) {
      setFromChain(prevChains.toChain);
    }
  }, [toChain]);

  const handleApprove = async () => {
    if (chainId !== fromChain) {
      await switchNetwork(fromChain);
      return;
    }
    const signer = library.getSigner();
    let ethBalanceHex = await signer.getBalance();
    let ethBalance = ethers.utils.formatEther(ethBalanceHex, 'ether');
    console.log(ethBalance);

    if (!amount) {
      window.alert('Please input token amount to transfer!');
      return;
    }

    if (ethBalance === 0) {
      window.alert('You don\'t have enough ether!');
      return;
    }
    console.log("sadasdasd",asset.address[toHex(chainId)])

    const res = await approve(
      amount,
      asset.address[toHex(chainId)],
      chainId,
      signer,
    );
    if (res === 1) {
      window.alert(
        `Successfully approved ${amount} ${asset.symbol}`,
      );
      setApproved(true)
    } else {
      window.alert('Approve failed!');
      setApproved(false)
    }
  };

  const handleAddCredentials = async () => {
    if (!amount) {
      window.alert('Please input token amount to transfer!');
      return;
    }

    handleOpen();
  };

  const handleDeposit = async () => {
    if (chainId !== fromChain) {
      await switchNetwork(fromChain);
      return;
    }
    const signer = library.getSigner();
    let ethBalanceHex = await signer.getBalance();
    let ethBalance = ethers.utils.formatEther(ethBalanceHex, 'ether');
    console.log(ethBalance);

    if (!amount) {
      window.alert('Please input token amount to transfer!');
      return;
    }

    if (ethBalance === 0) {
      window.alert('You don\'t have enough ether!');
      return;
    }

    if (fromChain !== SCALLOP_CHAINID) {
  
        deposit(amount, networkParams[toHex(toChain)].id, asset.resourceId, fromChain, signer);
      

    } else {
      depositScallop(amount, networkParams[toHex(toChain)].id, asset.resourceId, fromChain, signer);
    }

  };

  return (
    <Container maxWidth="lg">
      <Box as="main" className={classes.main}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <Paper
              sx={{
                width: 400,
                borderRadius: '20px',
                backgroundColor: '#fff',
              }}
            >
              <Box m="40px">
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder={`0 ${asset.symbol}`}
                  value={amount}
                  onChange={handleAmount}
                  className={classes.asset}
                />
                <Select
                  value={asset.resourceId}
                  renderValue={(value) => (
                    <Box display="flex" alignItems="center">
                      <Box pl="10px" width="34%">
                        <Typography variant="caption">Move</Typography>
                      </Box>
                      <Box>
                        <Typography>
                          {
                            assets.find((asset) => asset.resourceId === value)
                              .symbol
                          }
                        </Typography>
                      </Box>
                    </Box>
                  )}
                  sx={{
                    my: '10px',
                    width: '100%',
                    borderRadius: '20px',
                  }}
                >
                  {assets.map((asset) => (
                    <MenuItem
                      key={asset.resourceId}
                      value={asset.resourceId}
                    >{`${asset.name} (${asset.symbol})`}</MenuItem>
                  ))}
                </Select>
                <Select
                  value={fromChain}
                  renderValue={(value) => (
                    <Box display="flex" alignItems="center">
                      <Box pl="10px" width="34%">
                        <Typography variant="caption">From</Typography>
                      </Box>
                      <Box>
                        <Typography>
                          {networkParams[toHex(value)].chainName}
                        </Typography>
                      </Box>
                    </Box>
                  )}
                  sx={{
                    my: '10px',
                    width: '100%',
                    borderRadius: '20px',
                  }}
                  onChange={handleFromChain}
                >
                  {Object.values(networkParams).map((network) => (
                    <MenuItem key={network.chainId} value={network.chainId}>
                      {network.chainName}
                    </MenuItem>
                  ))}
                </Select>
                <Select
                  value={toChain}
                  renderValue={(value) => (
                    <Box display="flex" alignItems="center">
                      <Box pl="10px" width="34%">
                        <Typography variant="caption">To</Typography>
                      </Box>
                      <Box>
                        <Typography>
                          {networkParams[toHex(value)].chainName}
                        </Typography>
                      </Box>
                    </Box>
                  )}
                  sx={{
                    my: '10px',
                    width: '100%',
                    borderRadius: '20px',
                  }}
                  onChange={handleToChain}
                >
                  {Object.values(networkParams).map((network) => (
                    <MenuItem key={network.chainId} value={network.chainId}>
                      {network.chainName}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
              <Divider />
              <Box p="40px">
                {chainId ? (
                  isApproved ?  (
                    <Button
                      variant="contained"
                      sx={{
                        width: '100%',
                        borderRadius: '20px',
                      }}
                      onClick={() => handleDeposit()}
                    >
                      Deposit
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      sx={{
                        width: '100%',
                        borderRadius: '20px',
                      }}
                      onClick={() => handleApprove()}
                    >
                      Approve
                    </Button>
                  )
                ) : (
                  <Button
                    variant="contained"
                    sx={{
                      width: '100%',
                      borderRadius: '20px',
                    }}
                    onClick={() => connectWallet()}
                  >
                    Connect Wallet
                  </Button>
                )}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add your credentials
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              required
              id="standard-required"
              label="First Name"
              value={firstName}
              onChange={handleFirstName}
              variant="standard"
              sx={{ mb: 2 }}
            />
            <TextField
              required
              id="standard-required"
              label="Last Name"
              value={lastName}
              onChange={handleLastName}
              variant="standard"
              sx={{ mb: 2 }}
            />
            <DatePicker
              label="Birthday"
              inputFormat="MM/dd/yyyy"
              value={birthday}
              onChange={handleBirthday}
              renderInput={(params) => <TextField variant="standard" required sx={{ mb: 2 }} {...params} />}
            />
          </Typography>
          <Button
            variant="contained"
            sx={{
              width: '100%',
              borderRadius: '20px',
            }}
            onClick={() => handleDeposit()}
          >
            Deposit
          </Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default Bridge;
