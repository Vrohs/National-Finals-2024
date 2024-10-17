// import React, { useState } from 'react';
// import { verifyCredit } from '../services/web3Service';
// import { TextField, Button, Typography, Box, Paper } from '@mui/material';

// const VerifyCredit = () => {
//   const [tokenId, setTokenId] = useState('');
//   const [verificationMetadataURI, setVerificationMetadataURI] = useState('');

//   const handleVerify = async (e) => {
//     e.preventDefault();
//     try {
//       await verifyCredit(tokenId, verificationMetadataURI);
//       alert('Credit verified successfully!');
//     } catch (error) {
//       console.error('Error verifying credit:', error);
//       alert('Failed to verify credit');
//     }
//   };

//   return (
//     <Paper elevation={3} sx={{ p: 3 }}>
//       <Typography variant="h5" gutterBottom>Verify Credit</Typography>
//       <Box component="form" onSubmit={handleVerify} sx={{ '& .MuiTextField-root': { m: 1, width: '100%' } }}>
//         <TextField label="Token ID" type="number" value={tokenId} onChange={(e) => setTokenId(e.target.value)} required />
//         <TextField label="Verification Metadata URI" value={verificationMetadataURI} onChange={(e) => setVerificationMetadataURI(e.target.value)} required />
//         <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Verify Credit</Button>
//       </Box>
//     </Paper>
//   );
// };

// export default VerifyCredit;

// ---------------------------------


import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';
import axios from 'axios';

const VerifyCredit = () => {
  const [tokenId, setTokenId] = useState('');
  const [projectData, setProjectData] = useState('');

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/verification/verify/${tokenId}`, {
        projectData,
      });
      if (response.data.success) {
        alert('Credit verified successfully!');
      } else {
        alert(`Failed to verify credit: ${response.data.reason}`);
      }
    } catch (error) {
      console.error('Error verifying credit:', error);
      alert('Failed to verify credit');
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>Verify Credit</Typography>
      <Box component="form" onSubmit={handleVerify} sx={{ '&.MuiTextField-root': { m: 1, width: '100%' } }}>
        <TextField label="Token ID" type="number" value={tokenId} onChange={(e) => setTokenId(e.target.value)} required />
        <TextField label="Project Data" value={projectData} onChange={(e) => setProjectData(e.target.value)} required />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Verify Credit</Button>
      </Box>
    </Paper>
  );
};

export default VerifyCredit;