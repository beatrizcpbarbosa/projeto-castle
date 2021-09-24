import React, { useContext } from 'react';
import Context from '../ContextApi/Context';
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import logo from '../imgs/logo.svg'


function Header() {
  const { cart, setshowCart } = useContext(Context);
  return (
    <header className="header">
      <FiSearch color="white" size={20}/>

      <img src={logo} alt="logo" />

      <button className="button" onClick={() => setshowCart(true)}>
        <FiShoppingCart color="white" size={20}/>
        <div className="amount"> {cart.length} </div>
      </button>
    </header>
  );
}

export default Header;