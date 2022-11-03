import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar, Home, PrivateLabel, About, Contact, Products, ComfortFitPets, DriftToSleep, CupsAndUnderware, BraMoldedCup, BraUnderwires } from './components';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/privateLabel" element={<PrivateLabel />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/comfort-fit-pets" element={<ComfortFitPets />} />
        <Route path="/products/drift-to-sleep" element={<DriftToSleep />} />
        <Route path="/products/cups-and-underware" element={<CupsAndUnderware />} />
        <Route path="/products/cups-and-underwire/bra-molded-cup" element={<BraMoldedCup />} />
        <Route path="/products/cups-and-underwire/bra-underwires" element={<BraUnderwires />} />
      </Routes>
    </div>
  );
}

export default App;
