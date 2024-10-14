import React, { useState } from 'react';
import { mintCredit } from '../services/web3Service';

const MintCredit = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [projectType, setProjectType] = useState('');
  const [validityPeriod, setValidityPeriod] = useState('');
  const [metadataURI, setMetadataURI] = useState('');

  const handleMint = async (e) => {
    e.preventDefault();
    try {
      await mintCredit(recipient, amount, projectType, validityPeriod, metadataURI);
      alert('Credit minted successfully!');
    } catch (error) {
      console.error('Error minting credit:', error);
      alert('Failed to mint credit');
    }
  };

  return (
    <form onSubmit={handleMint}>
      <input type="text" value={recipient} onChange={(e) => setRecipient(e.target.value)} placeholder="Recipient Address" required />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
      <input type="text" value={projectType} onChange={(e) => setProjectType(e.target.value)} placeholder="Project Type" required />
      <input type="number" value={validityPeriod} onChange={(e) => setValidityPeriod(e.target.value)} placeholder="Validity Period (in seconds)" required />
      <input type="text" value={metadataURI} onChange={(e) => setMetadataURI(e.target.value)} placeholder="Metadata URI" required />
      <button type="submit">Mint Credit</button>
    </form>
  );
};

export default MintCredit;