import React from 'react';
import './Header.css'; 
import logo from  "../../assets/download.jpg"
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" style={{}}/>
      </div>
      <nav style={{width:"40%"}}>
      <ul style={{width:"100%",display:"flex"}}>
          <li className='header-name'><Link to="/">Dashboard</Link></li>
          <li className='header-name'><Link to="/product">Product</Link></li>
          <li className='header-name'><Link to="/order">Order</Link></li>
        </ul>
      </nav>
      <div className="search-bar">
      
      </div>
     
    </header>
  );
}

export default Header;
