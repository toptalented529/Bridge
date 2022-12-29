import { ChainId } from 'dbx-swap-sdk'

const NETWORK_URLS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: 'https://bsc-dataseed1.defibit.io',
  [ChainId.TESTNET]: 'https://bsc-dataseed.binance.org/',
}

export default NETWORK_URLS
