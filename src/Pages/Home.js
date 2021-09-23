import React, { useContext } from 'react';
import Context from '../ContextApi/Context';
import Header from '../Components/Header';
import Loading from '../Components/Loading';
import ProductsList from '../Components/ProductList';

function Home() {
  const { products, isLoading } = useContext(Context);

  if (isLoading) {
    return (
      <Loading />
    );
  }

  return(
    <>
      <Header />
      <ProductsList products={ products } />
    </>
  )
}

export default Home;