import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { productContext } from '../../contexts/ProductsContext';

const Header = () => {
  const history = useHistory()
const { getProducts} = useContext(productContext)

const handleValue = (e) => {
  const search = new URLSearchParams(history.location.search);
  search.set('q', e.target.value);
  history.push(`${history.location.pathname}?${search.toString()}`);
  getProducts(history);
};
  return (
    <>
    <nav position='fixed' className="navbar navbar-dark navbar-expand-lg fixed-top bg-black-transparent shadow">

      
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/list" style={{color:'pink' }}>
              Shop Now
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/favorites" style={{color:'pink' }}>
              Favorites
            </Link>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link" to="/cart" style={{color:'pink' }}>
              Shopping bag
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/signup" style={{color:'pink' }}>
              Sign Up or Sign In
            </Link>
          </li>
          <input  onChange={(e) => handleValue(e)}className="search" placeholder="Search..." style={{color:'pink' , borderRadius:'10px' , borderColor:'pink' , width:'100px', height:'30px',margin:"auto " , backgroundColor:'transparent' }}/>
        </ul>
      </div>

      <div className="logo" ><Link className="navbar-brand" to="/"  style={{color:'pink' , fontWeight:'bold' , fontSize:'36px' , marginRight:'640px'}}>
        Skin Care
      </Link></div>
    </nav>
    
    </>
  );
};

export default Header;