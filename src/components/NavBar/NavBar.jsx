import React from 'react';
import './NavBar.css';
import Cart from '../Cart/Cart';
import logoOso from '../../img/oso.png';

function NavBar() {
    return (
        <>
          <nav className="navbar bg-dark">
            <div className="container">
              <a className="navbar-brand" href=".">
                <img src={logoOso} alt="Bootstrap" width="80" height="80"/>
              </a>
              <Cart/>
            </div>
          </nav>
        </>
    );
}

export default NavBar;