import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Component/Header/Header';
import Dashboard from './Component/Dashboard/Dashboard';
import Product from './Component/Product/Product';
import Orders from './Component/OrderIteam/Orders';
import Calender from './Component/Calender/Calender';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div style={{marginTop:"1rem"}}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/calender" element={<Calender/>} />
        </Routes>
        </div>
       
      </div>
    </Router>
  );
}

export default App;
