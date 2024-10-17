// import React, { useState } from 'react';
// import { buyCredit } from '../services/web3Service';
// import { ethers } from 'ethers';
// import { TextField, Button, Typography, Box, Paper } from '@mui/material';

// const BuyCredit = () => {
//   const [tokenId, setTokenId] = useState('');
//   const [price, setPrice] = useState('');

//   const handleBuy = async (e) => {
//     e.preventDefault();
//     try {
//       await buyCredit(tokenId, ethers.utils.parseEther(price));
//       alert('Credit bought successfully!');
//     } catch (error) {
//       console.error('Error buying credit:', error);
//       alert(`Failed to buy credit: ${error.message}`);
//     }
//   };

//   return (
//     <Paper elevation={3} sx={{ p: 3 }}>
//       <Typography variant="h5" gutterBottom>Buy Credit</Typography>
//       <Box component="form" onSubmit={handleBuy} sx={{ '& .MuiTextField-root': { m: 1, width: '100%' } }}>
//         <TextField label="Token ID" type="number" value={tokenId} onChange={(e) => setTokenId(e.target.value)} required />
//         <TextField label="Price (in ETH)" value={price} onChange={(e) => setPrice(e.target.value)} required />
//         <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Buy Credit</Button>
//       </Box>
//     </Paper>
//   );
// };

// export default BuyCredit;
// -----------------------------



import React, { useState } from 'react';
import { buyCredit } from '../services/web3Service';
import { ethers } from 'ethers';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';

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
      alert(`Failed to buy credit: ${error.message}`);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Buy Credit</Typography>
      <Box component="form" onSubmit={handleBuy} sx={{ '&.MuiTextField-root': { m: 1, width: '100%' } }}>
        <TextField label="Token ID" type="number" value={tokenId} onChange={(e) => setTokenId(e.target.value)} required />
        <TextField label="Price (in ETH)" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Buy Credit</Button>
      </Box>
    </Paper>
  );
};

export default BuyCredit;