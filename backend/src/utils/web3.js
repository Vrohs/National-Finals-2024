// src/utils/web3.js
const { ethers } = require("ethers");
require('dotenv').config();

const provider = new ethers.JsonRpcProvider(process.env.ALCHEMY_RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const CarbonCreditABI = require('../../../artifacts/contracts/CarbonCredit.sol/CarbonCredit.json').abi;
const VerificationABI = require('../../../artifacts/contracts/verification.sol/Verification.json').abi;

const carbonCreditContract = new ethers.Contract(process.env.CARBON_CREDIT_ADDRESS, CarbonCreditABI, wallet);
const verificationContract = new ethers.Contract(process.env.VERIFICATION_ADDRESS, VerificationABI, wallet);

module.exports = {
  provider,
  wallet,
  carbonCreditContract,
  verificationContract
};