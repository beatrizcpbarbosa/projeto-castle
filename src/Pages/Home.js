import React, { useContext } from 'react';
import Context from '../ContextApi/Context';
import Header from '../Components/Header';
import Loading from '../Components/Loading';
import ProductsList from '../Components/ProductList';
import ShopCart from '../Components/ShopCart';

function Home() {
  const { products, isLoading, showCart } = useContext(Context);

  if (isLoading) {
    return (
      <Loading />
    );
  }

  function handleShopCart() {
    if(showCart) {
      return <ShopCart />
    }
  }

  return (
    <section>
      <Header />
      { handleShopCart() }
      <ProductsList products={ products } />
      
    </section>
  );
}

export default Home;