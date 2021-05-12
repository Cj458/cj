import React from 'react';
import './Header.css';
import logo from './icons/logostore.png';
import logo1 from './icons/search.png';
import logo2 from './icons/basket.png';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";



function Header() {

  const [{basket, user}, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }
    return (
        <div className='header'>
          <Link to="/">
            <img className="header_logo"
             src={logo} alt="Cjstore"/>
          </Link>


             <div className="header_search">
               <input className="header_searchInput" type="text"/>

               <img className="header_searchIcon"
               src={logo1} alt="header_searchIcon"/>
               {/*Logo */}
             </div>

             <div className="header_nav">
               <Link to={!user && '/login'}>
              <div onClick={handleAuthenticaton}
               className="header_option">
                <span className="header_optionLineOne">Hello Cj</span>
                <span className="header_optionLineTwo">{!user ?
                "Sign Out":"Sign In" }</span>
              </div>
              </Link>

              <div className="header_option">
                <span className="header_optionLineOne">Returns</span>
                <span className="header_optionLineTwo"> & Orders</span>
                
              </div>

              <div className="header_option">
                <span className="header_optionLineOne">Your</span>
                 <span className="header_optionLineTwo">Store</span>
              </div>

              <Link to="/checkout">
                 <div className="header_optionBasket">
                  <img className="header_optionBasket"
                   src={logo2} alt="Basket"/>
                   <span className="header_optionLineTwo 
                   header_basketCount">{basket?.length}</span>
                  </div>
              </Link>


             </div>
            
        </div>

    );
}

export default Header
