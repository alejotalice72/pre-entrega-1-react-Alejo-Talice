import React from 'react';
import carrito from '../../img/cart.png';

function Cart() {
  return (
    <>
        <div className="cart">
          <a href="."><img src={carrito} alt="carrito" className='img-fluid' width="30" height="24"/></a>
        </div>
    </>
  );
}

export default Cart;