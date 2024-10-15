import React, { useEffect } from 'react';
import { initializeWeb3 } from './services/web3Service';
import MintCredit from './components/MintCredit';
import ListCredit from './components/ListCredit';
import BuyCredit from './components/BuyCredit';
import VerifyCredit from './components/VerifyCredit';
import Layout from './components/Layout';
import { Grid, Typography } from '@mui/material';

function App() {
  useEffect(() => {
    initializeWeb3();
  }, []);

  return (
    <Layout>
      <Typography variant="h4" component="h1" gutterBottom>
        Carbon Credits Management
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <MintCredit />
        </Grid>
        <Grid item xs={12} md={6}>
          <ListCredit />
        </Grid>
        <Grid item xs={12} md={6}>
          <BuyCredit />
        </Grid>
        <Grid item xs={12} md={6}>
          <VerifyCredit />
        </Grid>
      </Grid>
    </Layout>
  );
}

export default App;