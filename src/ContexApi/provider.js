// import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

function Provider({ children }) { 
  
  const contextValue = {};

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