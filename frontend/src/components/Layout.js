import React from'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TerraToken.io
          </Typography>
          <Navigation />
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {children}
      </Container>
    </>
  );
};

export default Layout;