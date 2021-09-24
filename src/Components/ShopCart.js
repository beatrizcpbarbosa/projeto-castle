import React, { useContext } from 'react';
import Context from '../ContextApi/Context';


function ShopCart() {
  const { cart, increment, decrement, remove, total, setshowCart } = useContext(Context);

  if(!cart){
    return <h2> Your cart is empty!</h2>
  } 

  return (
    <section>
      
      <button type="button" onClick={() => setshowCart(false)}> Sair </button>

      { cart.map((item) => {
        const { thumbnail, price, title, amount, id } = item;
        return (
          <div key={id} >
            <img src={ thumbnail } alt="product img" width="100"/>
            <p> { title } </p>
            <p> { price } </p>
            <div>
              <button type="button" onClick={() => increment(item)}> + </button>
              <span>{ amount }</span>
              <button type="button" onClick={() => decrement(item)}> - </button>
            </div>
            <p>{ price * amount }</p>
            <button type="button" onClick={() => remove(item)}> deletar </button>
          </div>
        );
      }) }

      <p>Total:</p>
      <span>{ total }</span>
      
    </section>
  );
}

export default ShopCart;