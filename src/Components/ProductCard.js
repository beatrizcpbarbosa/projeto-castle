import React, { useContext } from 'react';
import Context from '../ContextApi/Context';


function ProductCard({product}) {
  const { addToCart } = useContext(Context);
  const { thumbnail, price, title } = product;

  return (
    <section>
      <img src={ thumbnail } alt="product-img" />
      <p>{ title }</p>
      <p>{ price }</p>
      <button type="button" onClick={() => addToCart(product)}> Add to cart </button>
    </section>
  );
}

export default ProductCard;