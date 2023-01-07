export const assets = {
     '0x1':{
      address: {
        '0x14e4': '0x91efa3FC448b7FCD40880F3ef650eB99635e6143',
        '0x1': '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      },
      name: 'USDT',
      symbol: 'USDT',
      resourceId: '0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce01',
      bridgeID: 1
    },
    '0x38':{
      address: {
        '0x14e4': '0x91efa3FC448b7FCD40880F3ef650eB99635e6143',
        '0x38': '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
      },
      name: 'usdc',
      symbol: 'usdc',
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
    '0x1': {
      id: 0,
      chainId: 1,
      hexChainId: '0x1',
      rpcUrls: ['https://rpc.ankr.com/eth'],
      chainName: 'Ethereum',
      nativeCurrency: { name: 'Ether', decimals: 18, symbol: 'ETH' },
      blockExplorerUrl: ['https://mumbai.polygonscan.com/'],
      iconUrls: [],
      gasPrice: '70000000000',
      gasLimit: '250000'
    },
    '0x38': {
      id: 0,
      chainId: 56,
      hexChainId: '0x38',
      rpcUrls: ['https://bsc-dataseed1.binance.org/'],
      chainName: 'BNB',
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
        bridge: '0x1b8bB56769c27842764CB7a072562B5Fba039349',
        handler: '0x83a7EB764335710e54005c8F9E20d32Ba2e747d6'
      },
      '0x38': {
        bridge: '0x3d94B8d881d9E566cB352CDb5B4BEd22c5659810',
        handler: '0x7E12e039AB71f90E7f3E3F70038aaCEe95038765',
        kycOracle: '0x45857A2887500518921fdA96FA8A0E16737345bF'
      }
    },
    "0x1": {
      '0x14e4': {
        bridge: '0x43d60fBa4A400D63A629FcB0F0E12C4B1B9f9b4A',
        handler: '0xF66F04CE5853Ef4bA49FC803F2679e231831A793'
      },
      "0x1": {
        bridge: '0xcdd657940007B84B37Bdf991426362BCc2b4A462',
        handler: '0x54D84859D552d992125974b25DbdCF38A8FF0313',
        kycOracle: '0x934f28AC9a132CEcf95B49830074Cdf360264171'
      }
    }
  };
  
  export const SCALLOP_CHAINID = 5348;
  
