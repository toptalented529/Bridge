export const assets = {
     '0x13881':{
      address: {
        '0x14e4': '0x92371Df9986C3324574F7331b783b1F9eb468Aec',
        '0x13881': '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
      },
      name: 'WETH',
      symbol: 'Weth',
      resourceId: '0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00',
      bridgeID: 1
    },
    '0x61':{
      address: {
        '0x14e4': '0x70D9655056045c8aedd61d31B96552752BF4c1aA',
        '0x61': '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
      },
      name: 'WBNB',
      symbol: 'Wbnb',
      resourceId: '0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00',
      bridgeID: 2
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
    '0x13881': {
      id: 0,
      chainId: 80001,
      hexChainId: '0x13881',
      rpcUrls: ['https://rpc-mumbai.maticvigil.com'],
      chainName: 'Mumbai Testnet',
      nativeCurrency: { name: 'MATIC', decimals: 18, symbol: 'MATIC' },
      blockExplorerUrl: ['https://mumbai.polygonscan.com/'],
      iconUrls: [],
      gasPrice: '30000000000',
      gasLimit: '8000000'
    },
    '0x61': {
      id: 0,
      chainId: 97,
      hexChainId: '0x61',
      rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
      chainName: 'BNB Testnet',
      nativeCurrency: { name: 'BNB', decimals: 18, symbol: 'Bnb' },
      blockExplorerUrl: ['https://goerli.etherscan.io'],
      iconUrls: [],
      gasPrice: '30000000000',
      gasLimit: '8000000'
    },
  };
  
  export const bridgeParams = {
    "0x61": {
      '0x14e4': {
        bridge: '0x8332E793D17FD759B40C4d85Cd11B59Fd7e25A26',
        handler: '0x321A8AfC3BbB01DfCC50fD03E5259C6A94EaC149'
      },
      '0x61': {
        bridge: '0x4e84C2C46C6314255c3D5c2bEE95C79C51F1f800',
        handler: '0x107a7677DE9C6ce777A487e67C1E600FE1Ff0664',
        kycOracle: '0x45857A2887500518921fdA96FA8A0E16737345bF'
      }
    },
    "0x13881": {
      '0x14e4': {
        bridge: '0x7403E63816a34f382F3015DBeB3f5Be174199f90',
        handler: '0x4d67A2b33681E37Af9D1de98d5DF1eC09F1f92c4'
      },
      "0x13881": {
        bridge: '0xf83d83b1Daa7008ff42506193EccDcB15E78f697',
        handler: '0x4906dFBADD8e5588edC4ca808a8d8Ba73390Dd05',
        kycOracle: '0x934f28AC9a132CEcf95B49830074Cdf360264171'
      }
    }
  };
  
  export const SCALLOP_CHAINID = 5348;
  
