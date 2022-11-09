export const assets = [
  {
    address: {
      '0x2328': '0xCDCEce96885125355ad0Cd3764dF45DCbFf55Cf3',
      '0x13881': '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
    },
    name: 'WMATIC',
    symbol: 'Wmatic',
    resourceId: '0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce02',
    bridgeID: 0
  },
  {
    address: {
      '0x2328': '0xD47c53ef8FCCce40dBbd6385273a4aF89201EEB5',
      '0x5': '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    },
    name: 'WETH',
    symbol: 'Weth',
    resourceId: '0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce01',
    bridgeID: 1
  },
  {
    address: {
      '0x2328': '0x70D9655056045c8aedd61d31B96552752BF4c1aA',
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
/*
  '0x5': {
    id: 0,
    chainId: 5,
    hexChainId: '0x5',
    rpcUrls: ['https://ethereum-goerli-rpc.allthatnode.com'],
    chainName: 'Ethereum Testnet',
    nativeCurrency: { name: 'Ether', decimals: 18, symbol: 'Ether' },
    blockExplorerUrl: ['https://goerli.etherscan.io'],
    iconUrls: [],
    gasPrice: '30000000000',
    gasLimit: '8000000'
  },
*/
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
    '0x2328': {
      bridge: '0xAE131c6d3A4FE33D89bf1f2F0beD651c48088628',
      handler: '0xc58Fa8DF06789873128A84B168b7D065eb4deDFd'
    },
    '0x13881': {
      bridge: '0x566427a195ceB38eB045a8cA66051624a699079A',
      handler: '0x05a2730C9E9F5828c4ED1D830744010393c79C7e',
      kycOracle: '0x934f28AC9a132CEcf95B49830074Cdf360264171'
    }
  },
  "0x5": {
    '0x2328': {
      bridge: '0x107a7677DE9C6ce777A487e67C1E600FE1Ff0664',
      handler: '0xdD0800Ec703948d306936661db1808E38fC21833'
    },
    '0x5': {
      bridge: '0x4e84C2C46C6314255c3D5c2bEE95C79C51F1f800',
      handler: '0x107a7677DE9C6ce777A487e67C1E600FE1Ff0664',
      kycOracle: '0x934f28AC9a132CEcf95B49830074Cdf360264171'
    }
  }
};

export const SCALLOP_CHAINID = 9000;

export const backendUrl = 'https://scallopbridge-backend.herokuapp.com';