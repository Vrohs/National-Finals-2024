import React, { useState } from 'react';
import { buyCredit } from '../services/web3Service';
import { ethers } from 'ethers';

const BuyCredit = () => {
  const [tokenId, setTokenId] = useState('');
  const [price, setPrice] = useState('');

  const handleBuy = async (e) => {
    e.preventDefault();
    try {
      await buyCredit(tokenId, ethers.utils.parseEther(price));
      alert('Credit bought successfully!');
    } catch (error) {
      console.error('Error buying credit:', error);
      alert('Failed to buy credit');
    }
  };

  return (
    <form onSubmit={handleBuy}>
      <input type="number" value={tokenId} onChange={(e) => setTokenId(e.target.value)} placeholder="Token ID" required />
      <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price (in ETH)" required />
      <button type="submit">Buy Credit</button>
    </form>
  );
};

export default BuyCredit;