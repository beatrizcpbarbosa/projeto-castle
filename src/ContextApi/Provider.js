import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import firstProducts from '../data'

function Provider({ children }) { 
  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [showCart, setshowCart] = useState(false);

  async function getProducts() {
    const data = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=$camisas');
    const productsData = await data.json();
    console.log([...firstProducts,  ...productsData.results]);
    setProducts([...firstProducts,  ...productsData.results]);
    setisLoading(false);
  }

  useEffect(() => {
    getProducts();
  }, []);

  function addToCart(product) {
    const check = cart.every((item) => product.id !== item.id);
    console.log(check);
    if(check) {
      setCart((previous) => [...previous, product])
    } else {
      alert("O produto já foi adicionado ao carrinho");
    }
  }
  
  const contextValue = {
    products,
    isLoading,
    addToCart,
    cart,
    showCart, 
    setshowCart
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;