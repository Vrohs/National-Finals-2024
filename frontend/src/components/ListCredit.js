import React, { useState } from 'react';
import { listCredit } from '../services/web3Service';
import { ethers } from 'ethers';

const ListCredit = () => {
  const [tokenId, setTokenId] = useState('');
  const [price, setPrice] = useState('');

  const handleList = async (e) => {
    e.preventDefault();
    try {
      await listCredit(tokenId, ethers.utils.parseEther(price));
      alert('Credit listed successfully!');
    } catch (error) {
      console.error('Error listing credit:', error);
      alert('Failed to list credit');
    }
  };

  return (
    <form onSubmit={handleList}>
      <input type="number" value={tokenId} onChange={(e) => setTokenId(e.target.value)} placeholder="Token ID" required />
      <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price (in ETH)" required />
      <button type="submit">List Credit</button>
    </form>
  );
};

export default ListCredit;