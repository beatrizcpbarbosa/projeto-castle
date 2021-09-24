import React from 'react';


function ProductCard({product}) {
  const { thumbnail, price, title } = product;
  return (
    <section>
      <img src={ thumbnail } alt="product-img" />
      <p>{ price }</p>
      <p>{ title }</p>
    </section>
  );
}

export default ProductCard;