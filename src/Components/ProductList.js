import React from 'react';
import ProductCard from './ProductCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ProductList({products}) {

  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          
        }
      }]
  };
  
  return (
    <section>
      <h1>Destaques</h1>
      <Slider {...settings}>
       { products.map((product) => <ProductCard key={product.id} product={product} /> ) }
      </Slider>
      {/* { products.map((product) => <ProductCard key={product.id} product={product} /> ) } */}
    </section>
  );
}

export default ProductList;