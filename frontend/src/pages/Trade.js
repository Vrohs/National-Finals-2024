import React from 'react';
import { Typography, Box, Paper, Grid, Container } from '@mui/material';
import BuyCredit from '../components/BuyCredit';
import ListCredit from '../components/ListCredit';

const Trade = () => {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" component="h1" gutterBottom>
              Trade Carbon Credits
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3}>
              <Box p={3}>
                <BuyCredit />
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3}>
              <Box p={3}>
                <ListCredit />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Trade;