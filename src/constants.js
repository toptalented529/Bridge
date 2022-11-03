export const assets = [
  {
    address: {
      '0x2328': '0x25Aa98e00E805dA83C604E0e77845886319F0763',
      '0x13881': '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
    },
    name: 'WMATIC',
    symbol: 'Wmatic',
    resourceId: '0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce01',
    bridgeID: 0
  },
  {
    address: {
      '0x2328': '0xC65857f77CbcaE40c3f3841a98510F78286DB588',
      '0x5': '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
    },
    name: 'WETH',
    symbol: 'Weth',
    resourceId: '0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce01',
    bridgeID: 1
  },
  {
    address: {
      '0x2328': '0x9afD645fD4A9e05f5F2e469bd86dBbb7FAD62036',
      '0x61': '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    },
    name: 'WBNB',
    symbol: 'Wbnb',
    resourceId: '0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00',
    bridgeID: 2
  },
];

export const networkParams = {
  '0x2328': {
    id: 1,
    chainId: 9000,
    hexChainId: '0x2328',
    rpcUrls: ['http://43.205.223.174:8545'],
    chainName: 'Scal Testnet',
    nativeCurrency: { name: 'utsclp', decimals: 18, symbol: 'utsclp' },
    blockExplorerUrls: ['http://52.56.60.20:4000/', 'https://52.56.60.20:4000'],
    iconUrls: [],
    gasPrice: '10000000000',
    gasLimit: '1000000'
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
  // '0x5': {
  //   id: 0,
  //   chainId: 5,
  //   hexChainId: '0x5',
  //   rpcUrls: ['https://goerli.infura.io/v3/'],
  //   chainName: 'Ethereum Testnet',
  //   nativeCurrency: { name: 'Ether', decimals: 18, symbol: 'Ether' },
  //   blockExplorerUrl: ['https://goerli.etherscan.io'],
  //   iconUrls: [],
  //   gasPrice: '30000000000',
  //   gasLimit: '8000000'
  // },
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
    '0x2328': {
      bridge: '0x5811c01d662994C72B104C207f9814011e4AcF7b',
      handler: '0xcC48D964B8E4fed7172C591366E9472a57aE1E5A'
    },
    '0x61': {
      bridge: '0xcC48D964B8E4fed7172C591366E9472a57aE1E5A',
      handler: '0x9afD645fD4A9e05f5F2e469bd86dBbb7FAD62036',
      kycOracle: '0x45857A2887500518921fdA96FA8A0E16737345bF'
    }
  },
  "0x13881": {
    '0x2328': {
      bridge: '0x4211fFdd7e9f16664C26E60414bA5aa0bB8339f7',
      handler: '0xdDd56B9F99AdeAC1bC868dc1CDBD49297F1BA107'
    },
    '0x13881': {
      bridge: '0x35A464a4872C6F58BAFF842f24C0fDC15E4F85AA',
      handler: '0x934f28AC9a132CEcf95B49830074Cdf360264171',
      kycOracle: '0x934f28AC9a132CEcf95B49830074Cdf360264171'
    }
  }
};

export const SCALLOP_CHAINID = 9000;

export const backendUrl = 'https://scallopbridge-backend.herokuapp.com';