import React from 'react';
import ProductCard from './ProductCard';


// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

import Carousel from 'react-elastic-carousel'

function ProductList({products}) {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

  return (
    <section className="produtos">
      <h1>Destaques</h1>

      <Carousel itemsToShow={4} breakPoints={breakPoints}>
        { products.map((product) => <ProductCard key={product.id} product={product} /> ) }
      </Carousel>
      
    </section>
  );
}

export default ProductList;