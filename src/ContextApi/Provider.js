import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) { 
  const [products, setProducts ] = useState([]);
  const [isLoading, setisLoading ] = useState(true);

  async function getProducts() {
    const data = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=$camisas');
    const productsData = await data.json();
    console.log(productsData.results);
    setProducts(productsData.results);
    setisLoading(false);
  }

  useEffect(() => {
    getProducts();
  }, []);
  
  const contextValue = {
    products,
    isLoading,
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