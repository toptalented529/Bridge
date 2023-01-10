import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 251,
    lpSymbol: 'INV-DBX LP',
    lpAddresses: {
      1339: '0xbD414BD587E80905F99339B025F486f5FBAfeA89',
      56: '0x5BfC4278E4B24F1Da1a10f51c4800b5AAa43d1B4',
    },
    token: tokens.inv,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 252,
    lpSymbol: 'BUSD-DBX LP',
    lpAddresses: {
      1339: '0xD579Ec19a5fA0dC0C40fe29Cd1341C175197DFD6',
      56: '0xfE6619603569B172fbb7DcC18CF9DF6B0755FF89',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 253,
    lpSymbol: 'INV-BUSD LP',
    lpAddresses: {
      1339: '0x3C20D2302192aDFfBC2D65Cfd710A59CbE7d0593',
      56: '0xcb4A7e8fbb0a293D8c889671A8695CA148535c6b',
    },
    token: tokens.inv,
    quoteToken: tokens.busd,
  },
  {
    pid: 254,
    lpSymbol: 'USDT-DBX LP',
    lpAddresses: {
      1339: '0x377c9043FF74c42fF3959EAA9b5528E87bF0aF25',
      56: '0x655A2C3b7a634dcBfDA9C7f2F805E6b7408435E7',
    },
    token: tokens.usdt,
    quoteToken: tokens.wbnb,
  },
]

export default farms
