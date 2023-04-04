import React from 'react';
import carrito from '../../img/cart.png';

function Cart({count}) {
  return (
    <>
        <div className="cart">
          <img src={carrito} alt="carrito" className='img-fluid' width="30" height="24"/>
          <span className='cart__count'>{count}</span>
        </div>
    </>
  );
}

export default Cart;