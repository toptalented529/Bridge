import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  // {
  //   sousId: 1,
  //   stakingToken: tokens.inv,
  //   earningToken: tokens.usdt,
  //   contractAddress: {
  //     1339: '0x1F33F2bbe4aF627fA24AaCDE12b7ab4Eb947622c',
  //     56: '0x36906B717b8FC162Dab884Dbe7d6f21557aa556e',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.01331',
  //   sortOrder: 1,
  //   isFinished: false,
  // },
  {
    sousId: 3,
    stakingToken: tokens.inv,
    earningToken: tokens.busd,
    contractAddress: {
      1339: '0xc4e1120B28e8c4c91efFd3611A0dB02dFD0b186a',
      56: '0xdc9a713ec043e58282460af4d02188bf5c5a0191',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.01331',
    sortOrder: 1,
    isFinished: false,
  },
  // {
  //   sousId: 6,
  //   stakingToken: tokens.inv,
  //   earningToken: tokens.inv,
  //   contractAddress: {
  //     1339: '0x59f380a0a2a700c3a9f1220df8f2c5710737d113',
  //     56: '0x36906B717b8FC162Dab884Dbe7d6f21557aa556e',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.01331',
  //   sortOrder: 1,
  //   isFinished: false,
  // },
]

export default pools
