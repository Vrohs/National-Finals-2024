import React, { useEffect } from 'react';
import { initializeWeb3 } from './services/web3Service';
import MintCredit from './components/MintCredit';
import ListCredit from './components/ListCredit';
import BuyCredit from './components/BuyCredit';
import VerifyCredit from './components/VerifyCredit';

function App() {
  useEffect(() => {
    initializeWeb3();
  }, []);

  return (
    <div className="App">
      <h1>TerraToken</h1>
      <MintCredit />
      <ListCredit />
      <BuyCredit />
      <VerifyCredit />
    </div>
  );
}

export default App;