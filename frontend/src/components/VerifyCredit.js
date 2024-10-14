import React, { useState } from 'react';
import { verifyCredit } from '../services/web3Service';

const VerifyCredit = () => {
  const [tokenId, setTokenId] = useState('');
  const [verificationMetadataURI, setVerificationMetadataURI] = useState('');

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      await verifyCredit(tokenId, verificationMetadataURI);
      alert('Credit verified successfully!');
    } catch (error) {
      console.error('Error verifying credit:', error);
      alert('Failed to verify credit');
    }
  };

  return (
    <form onSubmit={handleVerify}>
      <input type="number" value={tokenId} onChange={(e) => setTokenId(e.target.value)} placeholder="Token ID" required />
      <input type="text" value={verificationMetadataURI} onChange={(e) => setVerificationMetadataURI(e.target.value)} placeholder="Verification Metadata URI" required />
      <button type="submit">Verify Credit</button>
    </form>
  );
};

export default VerifyCredit;