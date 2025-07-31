import React from 'react'
import Navbar from '../src/components/Navbar';
import Store from '../src/components/Store';
import "./App.css"
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Store />} />
        <Route path='/product/:id/details' element={<ProductDetails />} />
      </Routes>
    </>
  )
}

export default App