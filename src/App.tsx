import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Promotions from './pages/Promotions';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="productos" element={<Products />} />
        <Route path="promociones" element={<Promotions />} />
        <Route path="contacto" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;