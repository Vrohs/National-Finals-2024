// import React, { useState } from 'react';
// import { listCredit } from '../services/web3Service';
// import { ethers } from 'ethers';
// import { TextField, Button, Typography, Box, Paper } from '@mui/material';

// const ListCredit = () => {
//   const [tokenId, setTokenId] = useState('');
//   const [price, setPrice] = useState('');

//   const handleList = async (e) => {
//     e.preventDefault();
//     try {
//       await listCredit(tokenId, ethers.utils.parseEther(price));
//       alert('Credit listed successfully!');
//     } catch (error) {
//       console.error('Error listing credit:', error);
//       alert('Failed to list credit');
//     }
//   };

//   return (
//     <Paper elevation={3} sx={{ p: 3 }}>
//       <Typography variant="h5" gutterBottom>List Credit</Typography>
//       <Box component="form" onSubmit={handleList} sx={{ '& .MuiTextField-root': { m: 1, width: '100%' } }}>
//         <TextField label="Token ID" type="number" value={tokenId} onChange={(e) => setTokenId(e.target.value)} required />
//         <TextField label="Price (in ETH)" value={price} onChange={(e) => setPrice(e.target.value)} required />
//         <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>List Credit</Button>
//       </Box>
//     </Paper>
//   );
// };

// export default ListCredit;
// ---------------------------------


// frontend/src/components/ListCredit.js
import React, { useState } from 'react';
import { listCredit } from '../services/web3Service';
import { ethers } from 'ethers';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';

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
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>List Credit</Typography>
      <Box component="form" onSubmit={handleList} sx={{ '&.MuiTextField-root': { m: 1, width: '100%' } }}>
        <TextField label="Token ID" type="number" value={tokenId} onChange={(e) => setTokenId(e.target.value)} required />
        <TextField label="Price (in ETH)" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>List Credit</Button>
      </Box>
    </Paper>
  );
};

export default ListCredit;