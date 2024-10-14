import { ethers } from 'ethers';
import CarbonCreditABI from '../abis/CarbonCredit.json';
import CarbonCreditMarketABI from '../abis/CarbonCreditMarket.json';
import VerificationABI from '../abis/Verification.json';


const CarbonCreditAddress = '0xE9C9495bd6a5e121a3Ce6980E8d994Ca5eD7D33C';
const CarbonCreditMarketAddress = '0xFb07C0eE57230A12EA9033C72E63D8c6Bec867C6';
const VerificationAddress = '0xe3750E5a35BF962E0771f56f44c78F024754ce37';

let provider, signer, carbonCreditContract, marketContract, verificationContract;

export const initializeWeb3 = async () => {
  if (window.ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    
    carbonCreditContract = new ethers.Contract(CarbonCreditAddress, CarbonCreditABI, signer);
    marketContract = new ethers.Contract(CarbonCreditMarketAddress, CarbonCreditMarketABI, signer);
    verificationContract = new ethers.Contract(VerificationAddress, VerificationABI, signer);
  } else {
    console.error("Ethereum wallet is not detected");
  }
};

export const mintCredit = async (recipient, amount, projectType, validityPeriod, metadataURI) => {
  return await carbonCreditContract.mintCredit(recipient, amount, projectType, validityPeriod, metadataURI);
};

export const listCredit = async (tokenId, price) => {
  return await marketContract.listCredit(tokenId, price);
};

export const buyCredit = async (tokenId, price) => {
  return await marketContract.buyCredit(tokenId, { value: price });
};

export const verifyCredit = async (tokenId, verificationMetadataURI) => {
  return await verificationContract.verifyCredit(tokenId, verificationMetadataURI);
};