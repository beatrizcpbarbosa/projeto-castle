import React, { useContext } from 'react';
import Context from '../ContextApi/Context';
import { FiHeart } from "react-icons/fi";



function ProductCard({product}) {
  const { addToCart, setshowCart } = useContext(Context);
  const { thumbnail, price, title } = product;

  return (
    <section className="card">
      <img src={ thumbnail } alt="product-img" />

      <div className="card-title">
        <p>{ title }</p>
        <FiHeart color="red" size={20} />
      </div>
      
      <p className="card-price" >{ price }</p>
      <button 
        type="button"
        className="btn-add"
        onClick={() => {
          addToCart(product);
          setshowCart(true);
        }}> 
          Add to cart 
        </button>
    </section>
  );
}

export default ProductCard;