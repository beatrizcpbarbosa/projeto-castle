import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import firstProducts from '../data'

function Provider({ children }) { 
  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [showCart, setshowCart] = useState(false);
  const [total, setTotal] = useState(0);
  

  async function getProducts() {
    const data = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=$camisas');
    const productsData = await data.json();
    console.log([...firstProducts,  ...productsData.results]);
    
    const AllProducts = [...firstProducts,  ...productsData.results];
    AllProducts.map((item) => item['amount'] = 1);
    setProducts(AllProducts);
    setisLoading(false);
  }

  useEffect(() => {
    getProducts();
  }, []);

  function getTotal(product) {
    if(cart.length === 1 && product.amout === 1){
      setTotal(product.price);
    }

    const total = cart.reduce((prev, item) => {
      return prev + (item.price * item.amount);
    },0)

    setTotal(total);
  }

  function addToCart(product) {
    const check = cart.every((item) => product.id !== item.id);
    console.log(check);
  
    if(check) {
      setCart((previous) => [...previous, product]);
      getTotal(product);
    } else {
      alert("O produto já foi adicionado ao carrinho");
    }
  }

  function increment(product) {
    product.amount += 1;

    const updateCart = [...cart]

    let index = updateCart.findIndex((item) => item.id === product.id);
    console.log(index);

    updateCart[index] = product;

    setCart(updateCart);
    getTotal(product);
  }

  function decrement(product) {
    product.amount -= 1;

    if(product.amount <= 1) product.amount = 1;
    
    const updateCart = [...cart]

    let index = updateCart.findIndex((item) => item.id === product.id);
    console.log(index);

    updateCart[index] = product;

    setCart(updateCart);
    getTotal(product);
  }

  function remove(product) {
    product.amount = 1;
    
    const updateCart = [...cart]

    let index = updateCart.findIndex((item) => item.id === product.id);
    console.log(index);

    updateCart[index] = product;

    const removeProduct = updateCart.filter((item) => item.id !== product.id);
    console.log(removeProduct);

    setCart([...removeProduct]);
    getTotal(product);
  }

  const contextValue = {
    products,
    isLoading,
    addToCart,
    cart,
    showCart, 
    setshowCart,
    increment,
    decrement,
    remove,
    getTotal,
    total,
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