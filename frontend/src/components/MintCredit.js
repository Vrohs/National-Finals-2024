import React, { useState } from 'react';
import { mintCredit } from '../services/web3Service';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';

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
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Mint Credit</Typography>
      <Box component="form" onSubmit={handleMint} sx={{ '& .MuiTextField-root': { m: 1, width: '100%' } }}>
        <TextField label="Recipient Address" value={recipient} onChange={(e) => setRecipient(e.target.value)} required />
        <TextField label="Amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        <TextField label="Project Type" value={projectType} onChange={(e) => setProjectType(e.target.value)} required />
        <TextField label="Validity Period (in seconds)" type="number" value={validityPeriod} onChange={(e) => setValidityPeriod(e.target.value)} required />
        <TextField label="Metadata URI" value={metadataURI} onChange={(e) => setMetadataURI(e.target.value)} required />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Mint Credit</Button>
      </Box>
    </Paper>
  );
};

export default MintCredit;