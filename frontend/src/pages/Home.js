import React from 'react';
import { Typography, Box, Paper, Grid, Container } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" component="h1" gutterBottom>
              Welcome to TerraToken.io
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3}>
              <Box p={3}>
                <Typography variant="body1" paragraph>
                  TerraToken.io is a decentralized platform for carbon credits trading. Our mission is to promote sustainability and reduce carbon emissions by facilitating the exchange of carbon credits between businesses and individuals.
                </Typography>
                <Typography variant="body1" paragraph>
                  With TerraToken.io, you can easily buy, sell, and manage your carbon credits, all on a secure and transparent blockchain network. Join us in the fight against climate change and start trading carbon credits today!
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;