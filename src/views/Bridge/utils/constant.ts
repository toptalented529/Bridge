export const assets = {
     '0x1':{
      address: {
        '0x14e4': '0x91efa3FC448b7FCD40880F3ef650eB99635e6143',
        '0x1': '0x3cbc780d2934d55a06069e837fabd3e6fc23dab0',
      },
      name: 'DBX',
      symbol: 'DBX',
      resourceId: '0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce03',
      bridgeID: 4
    },
    '0x38':{
      address: {
        '0x14e4': '0x91efa3FC448b7FCD40880F3ef650eB99635e6143',
        '0x38': '0x67dcAa9468c219ad81F5825EF0c8f58879c657dd',
      },
      name: 'DBX',
      symbol: 'DBX',
      resourceId: '0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce02',
      bridgeID: 3
    },
};
  
  export const networkParams = {
    '0x14e4': {
      id: 1,
      chainId: 5348,
      hexChainId: '0x14e4',
      rpcUrls: ['https://dbxnode.com/'],
      chainName: 'DBX',
      nativeCurrency: { name: 'utsclp', decimals: 18, symbol: 'dbx' },
      blockExplorerUrls: ['http://52.56.60.20:4000/', 'https://52.56.60.20:4000'],
      iconUrls: [],
      gasPrice: '500000000000',
      gasLimit: '450385'
    },
    '0x1': {
      id: 0,
      chainId: 1,
      hexChainId: '0x1',
      rpcUrls: ['https://rpc.ankr.com/eth'],
      chainName: 'Ethereum',
      nativeCurrency: { name: 'Ether', decimals: 18, symbol: 'ETH' },
      blockExplorerUrl: ['https://mumbai.polygonscan.com/'],
      iconUrls: [],
      gasPrice: '30000000000',
      gasLimit: '8000000'
    },
    '0x38': {
      id: 0,
      chainId: 56,
      hexChainId: '0x38',
      rpcUrls: ['https://bsc-dataseed2.defibit.io/'],
      chainName: 'BNB ',
      nativeCurrency: { name: 'BNB', decimals: 18, symbol: 'Bnb' },
      blockExplorerUrl: ['https://goerli.etherscan.io'],
      iconUrls: [],
      gasPrice: '30000000000',
      gasLimit: '8000000'
    },
  };
  
  export const bridgeParams = {
    "0x38": {
      '0x14e4': {
        bridge: '0x4F67DbfE6A901b3B564B958e168eF9F6B0127CF3',
        handler: '0x9458DCf69F45F9517291091B122585cF5658f425'
      },
      '0x38': {
        bridge: '0x69D7e345f09019E57fF98A527044261B78e0a6ef',
        handler: '0x0e59675d63f491A948A96e79843E19588fa6E652',
        kycOracle: '0x45857A2887500518921fdA96FA8A0E16737345bF'
      }
    },
    "0x1": {
      '0x14e4': {
        bridge: '0x2D54D6E69D69762BCEB41e90c87ebDc2e611B6f6',
        handler: '0xdeDe3e7bCB996c670aEF41DDdf473dAF94ce92cc'
      },
      "0x1": {
        bridge: '0x74baC7E4cfBea8F71d4ea6ce3C190bFce61Bc22E',
        handler: '0x2fd26785BE96b970c7Ee54e26C84bCf1b6c692f2',
        kycOracle: '0x934f28AC9a132CEcf95B49830074Cdf360264171'
      }
    }
  };
  
  export const SCALLOP_CHAINID = 5348;
  
