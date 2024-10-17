// import React, { useEffect } from 'react';
// import { initializeWeb3 } from './services/web3Service';
// import MintCredit from './components/MintCredit';
// import ListCredit from './components/ListCredit';
// import BuyCredit from './components/BuyCredit';
// import VerifyCredit from './components/VerifyCredit';
// import Layout from './components/Layout';
// import { Grid, Typography } from '@mui/material';

// function App() {
//   useEffect(() => {
//     initializeWeb3();
//   }, []);

//   return (
//     <Layout>
//       <Typography variant="h4" component="h1" gutterBottom>
//         Carbon Credits Management
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={6}>
//           <MintCredit />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <ListCredit />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <BuyCredit />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <VerifyCredit />
//         </Grid>
//       </Grid>
//     </Layout>
//   );
// }

// export default App;
// --------------------------------------
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Layout from './components/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Trade from './pages/Trade';
import Portfolio from './pages/Portfolio';
import MarketAnalysis from './pages/MarketAnalysis';
import Profile from './pages/Profile';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/trade" element={<Trade />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/market-analysis" element={<MarketAnalysis />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;