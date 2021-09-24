import React, { useContext } from 'react';
import Context from '../ContextApi/Context';

function Header() {
  const { cart } = useContext(Context);
  return (
    <section>
      <p>{cart.length}</p>
    </section>
  );
}

export default Header;