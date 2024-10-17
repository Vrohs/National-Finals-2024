import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Navigation = () => {
  return (
    <>
      <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
      <Button color="inherit" component={Link} to="/trade">Trade</Button>
      <Button color="inherit" component={Link} to="/portfolio">Portfolio</Button>
      <Button color="inherit" component={Link} to="/market-analysis">Market Analysis</Button>
      <Button color="inherit" component={Link} to="/profile">Profile</Button>
    </>
  );
};

export default Navigation;