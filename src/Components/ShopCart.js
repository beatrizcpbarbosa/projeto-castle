import React, { useContext } from 'react';
import Context from '../ContextApi/Context';
import { FiX } from "react-icons/fi";

function ShopCart() {
  const { cart, increment, decrement, remove, total, setshowCart } = useContext(Context);

  
  if(cart.length === 0){
    return (
      <section className="bg-shopcart">
        <section className="section-shopcart">
        <div className="header-shopcart">
          <h2 className="empty"> Sua sacola está vazia! </h2>
          <button type="button" onClick={() => setshowCart(false)} className="button"> 
            <FiX  size={16}/> 
          </button>
        </div>
        </section>
       </section>    
    );
  } 

  return (
    <section className="bg-shopcart">
      <section className="section-shopcart">

      <div className="header-shopcart">
        <h2> Sua sacola </h2>
        <button type="button" onClick={() => setshowCart(false)} className="button"> 
          <FiX  size={16}/> 
        </button>
      </div>

        { cart.map((item) => {
          const { thumbnail, price, title, amount, id } = item;
          return (
            <div key={id}  className="shop">

              <img src={ thumbnail } alt="product img" width="100"/>

              <div className="conteudo">
                <div className="conteudo-texto">
                  <p> { title } </p>
                  <button type="button" onClick={() => remove(item)} className="button"> 
                    <FiX  size={15}/> 
                  </button>
                </div>

                <div className="conteudo-preco">

                  <div className="btn-preco">
                    <button type="button" onClick={() => increment(item)} className="button"> + </button>
                      <span>{ amount }</span>
                    <button type="button" onClick={() => decrement(item)} className="button"> - </button>
                  </div>
                 

                  <span> { price } </span>
                  <p>{ price * amount }</p>
                </div>
              </div>
              
            </div>
          );
        }) }


        <div className="finalizar-compra">
          <div className="total"> 
            <p>Total: </p>
            <p>{ total }</p>
          </div>

          <button type="button" className="button finalizarPedido"> Finalizar pedido </button>
        </div>
        
       

      </section>
    </section>
  );
}

export default ShopCart;