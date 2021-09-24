import React, { useContext } from 'react';
import Context from '../ContextApi/Context';


function ShopCart() {
  const { cart, increment, decrement } = useContext(Context);

  // if(!cart){
  //   return <h2> Your cart is empty!</h2>
  // } 

  return (
    <section>
      { cart.map((item) => {
        const { thumbnail, price, title, amount, id } = item;
        return (
          <div key={id} >
            <img src={ thumbnail } alt="product img" width="100"/>
            <p> { title } </p>
            <p> { price } </p>
            <div>
              <button type="button" onClick={() => increment(item)}> + </button>
              <sapan>{ amount }</sapan>
              <button type="button" onClick={() => decrement(item)}> - </button>
            </div>
          </div>
        );
      }) }
      
    </section>
  );
}

export default ShopCart;