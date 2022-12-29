import { ChainId } from 'inve-swap-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xfF6FD90A470Aaa0c1B8A54681746b07AcdFedc9B',
  [ChainId.TESTNET]: '0x3d94B8d881d9E566cB352CDb5B4BEd22c5659810',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
