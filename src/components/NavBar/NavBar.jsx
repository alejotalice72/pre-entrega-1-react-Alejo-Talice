import React from 'react';
import './NavBar.css';
import Cart from '../Cart/Cart';
import logoOso from '../../img/oso.png';
import CategoryBtn from '../CategoryBtn/CategoryBtn';

function NavBar({saludo, categorias}) {
    return (
        <>
          <nav className="navbar bg-dark">
            <div className="container">
              <a className="navbar-brand" href=".">
                <img src={logoOso} alt="Bootstrap" width="80" height="80"/>
              </a>
              <Cart count = '0'/>
            </div>
            <div className='container categorias'>
              <div className="d-grid gap-2 col-12 mx-auto">
                {categorias.map((nameCategory)=>{
                  return <CategoryBtn titleCategory={nameCategory}/>
                })}
              </div>
            </div>
          </nav>
          <h1 className='text-center mt-4'> {saludo} </h1>
        </>
    );
}

export default NavBar;