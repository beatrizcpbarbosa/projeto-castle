import React, { useContext } from 'react';
import Context from '../ContextApi/Context';


function ShopCart() {
  const { cart, } = useContext(Context);

  // if(!cart){
  //   return <h2> Your cart is empty!</h2>
  // } 

  return (
    <section>
      { cart.map((item) => {
        const { thumbnail, price, title } = item;
        return (
          <div className="cart-product">
            <img src={ thumbnail } alt="product img" width="100"/>
            <p> { title } </p>
            <p> { price } </p>
          </div>
        );
      }) }
      
    </section>
  );
}

export default ShopCart;