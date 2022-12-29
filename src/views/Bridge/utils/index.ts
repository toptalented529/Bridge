import { ethers } from 'ethers';
import { networkParams, bridgeParams } from './constant';
import { toHex } from './utils';
import tokenAbi from './abis/ERC20.json';
import bridgeAbi from './abis/Bridge.json';
import bridgeScallopAbi from './abis/BridgeScallop.json';

export const approve = async (amount:any, tokenAddr:any,bridgeNetwork:any, chainId:any, wallet:any): Promise<any> => {
  const token = new ethers.Contract(tokenAddr, tokenAbi, wallet);
  const handlerAddr = bridgeParams[toHex(bridgeNetwork)][toHex(chainId)].handler;

  const amountInWei = ethers.utils.parseUnits(amount.toString(), 'ether');
  const gasPrice = ethers.utils.hexlify(
    Number(networkParams[toHex(chainId)].gasPrice),
  );
  const gasLimit = ethers.utils.hexlify(
    Number(networkParams[toHex(chainId)].gasLimit),
  );

  const account = await wallet.getAddress();
  const balanceInWei = await token.balanceOf(account);
  const balance = ethers.utils.formatEther(balanceInWei);

  if (balance < amount) {
    console.log('You don\'t have enough token balance!',balance);
    return {};
  }

  const allowanceInWei = await token.allowance(account, handlerAddr);
  const allowance = ethers.utils.formatEther(allowanceInWei);

  console.log(allowance)
  if (allowance >= amount) {
    window.alert('Enough token is already approved!');
    return 1
  }

  const tx = await token.approve(handlerAddr, amountInWei);

  window.alert(`Transaction submitted!\n Transaction hash: ${tx.hash}`);
  const res = await tx.wait();
  
  return res.status;
};


export const deposit = async (
  amount:number,
  dest:number,
  bridgeNetwork:number,
  resourceId:any,
  chainId:number,
  wallet:any,
) => {
  // if (!credentials) {
  //   console.log('\nYou must input credentials!');
  //   return;
  // }


  console.log("ffeerr",bridgeNetwork,chainId)
  const bridgeAddr = bridgeParams[toHex(bridgeNetwork)][toHex(chainId)].bridge;
  const bridge = new ethers.Contract(bridgeAddr, bridgeAbi.abi, wallet);

  const recipient = await wallet.getAddress();

  const amountInWei = ethers.utils.parseUnits(amount.toString(), 'ether');
  const gasPrice = ethers.utils.hexlify(
    Number(networkParams[toHex(chainId)].gasPrice),
  );
  const gasLimit = ethers.utils.hexlify(
    Number(networkParams[toHex(chainId)].gasLimit),
  );

//   const data =
//     '0x' +
//     ethers.utils.hexZeroPad(amountInWei.toHexString(), 32).substr(2) + // Deposit Amount        (32 bytes)
//     ethers.utils
//       .hexZeroPad(ethers.utils.hexlify((recipient.length - 2) / 2), 32)
//       .substr(2) + // len(recipientAddress) (32 bytes)
//     recipient.substr(2); // recipientAddress      (?? bytes)

    const data = (('0x'.concat(ethers.utils.hexZeroPad(amountInWei.toHexString(), 32).substr(2))).concat(
        ethers.utils
      .hexZeroPad(ethers.utils.hexlify((recipient.length - 2) / 2), 32)
      .substr(2)
    )).concat(recipient.substr(2))


  console.log('\nConstructed deposit:');
  console.log(`  Resource Id: ${resourceId}`);
  console.log(`  Amount: ${amountInWei.toHexString()}`);
  console.log(`  len(recipient): ${(recipient.length - 2) / 2}`);
  console.log(`  Recipient: ${recipient}`);
  console.log(`  Raw: ${data}`);
  console.log('Creating deposit to initiate transfer!');

  // Make the deposit
  const tx = await bridge.deposit(
    dest, // destination chain id
    resourceId,
    data,
    {  gasPrice,  gasLimit },
  );

  window.alert(`Transaction submitted!\n Transaction hash: ${tx.hash}`);
  const res = await tx.wait();
  return res.status;
};

export const depositScallop = async (
  amount:number,
  dest:number,
  bridgeNetwork:number,
  resourceId:any,
  chainId:number,
  wallet:any,
) => {
    const bridgeAddr = bridgeParams[toHex(bridgeNetwork)][toHex(chainId)].bridge;
    const bridge = new ethers.Contract(bridgeAddr, bridgeScallopAbi, wallet);
  const recipient = await wallet.getAddress();

  const amountInWei = ethers.utils.parseUnits(amount.toString(), 'ether');
  const gasPrice = ethers.utils.hexlify(
    Number(networkParams[toHex(chainId)].gasPrice),
  );
  const gasLimit = ethers.utils.hexlify(
    Number(networkParams[toHex(chainId)].gasLimit),
  );
  const value = ethers.utils.parseEther(amount.toString())

//   const data =
//     '0x' +
//     ethers.utils.hexZeroPad(amountInWei.toHexString(), 32).substr(2) + // Deposit Amount        (32 bytes)
//     ethers.utils
//       .hexZeroPad(ethers.utils.hexlify((recipient.length - 2) / 2), 32)
//       .substr(2) + // len(recipientAddress) (32 bytes)
//     recipient.substr(2); // recipientAddress      (?? bytes)

    const data = (('0x'.concat(ethers.utils.hexZeroPad(amountInWei.toHexString(), 32).substr(2))).concat(
        ethers.utils
      .hexZeroPad(ethers.utils.hexlify((recipient.length - 2) / 2), 32)
      .substr(2)
    )).concat(recipient.substr(2))

  console.log('\nConstructed deposit:',value);
  console.log(`  Resource Id: ${resourceId}`);
  console.log(`  Amount: ${amountInWei.toHexString()}`);
  console.log(`  len(recipient): ${(recipient.length - 2) / 2}`);
  console.log(`  Recipient: ${recipient}`);
  console.log(`  Raw: ${data}`);
  console.log('Creating deposit to initiate transfer!');

  // Make the deposit
  const tx = await bridge.deposit(
    dest, // destination chain id
    resourceId,
    data, 
    { value},
  );

  window.alert(`Transaction submitted!\n Transaction hash: ${tx.hash}`);
  const res = await tx.wait();
  return res.status;
};
