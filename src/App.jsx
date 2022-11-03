import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar, Home, PrivateLabel, About, Contact, Products, ComfortFitPets, DriftToSleep, CupsAndUnderware, BraMoldedCup, BraUnderwires, ProductHome, CupsAndUnderwareHome } from './components';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="privateLabel" element={<PrivateLabel />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={<Products />} >
          <Route index element={<ProductHome />} />
          <Route path="comfort-fit-pets" element={<ComfortFitPets />} />
          <Route path="drift-to-sleep" element={<DriftToSleep />} />
          <Route path="cups-and-underware" element={<CupsAndUnderware />} >
            <Route index element={<CupsAndUnderwareHome />} />
            <Route path="bra-molded-cup" element={<BraMoldedCup />} />
            <Route path="bra-underwires" element={<BraUnderwires />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
