export const assets = [
  {
    address: {
      '0x2328': '0xC65857f77CbcaE40c3f3841a98510F78286DB588',
      '0x13881': '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
    },
    name: 'WMATIC',
    symbol: 'Wmatic',
    resourceId: '0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00'
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
    blockExplorerUrls: ['http://52.56.60.20:4000/','https://52.56.60.20:4000'],
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
};

export const bridgeParams = {
  '0x2328': {
    bridge: '0xeb2C85851a44f65D15d1422e5Cf5077506fEf8ef',
    handler: '0xFEcB66F2fb5445ADB6A785BB1A69aD6228461713'
  },
  '0x13881': {
    bridge: '0xEd40f0EAa40d1b1718B02627b6aDa289100f4a6E',
    handler: '0x45857A2887500518921fdA96FA8A0E16737345bF',
    kycOracle: '0x45857A2887500518921fdA96FA8A0E16737345bF'
  }
};

export const SCALLOP_CHAINID = 9000;

export const backendUrl = 'https://scallopbridge-backend.herokuapp.com';