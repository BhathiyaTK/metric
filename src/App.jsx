import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar, Home, PrivateLabel, About, Contact } from './components';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privateLabel" element={<PrivateLabel />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
