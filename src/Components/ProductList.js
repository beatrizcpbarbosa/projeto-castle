import React from 'react';
import ProductCard from './ProductCard'

function ProductList({products}) {
  return (
    <section>
      { products.map((product) => <ProductCard key={product.id} product={product} /> ) }
    </section>
  );
}

export default ProductList;