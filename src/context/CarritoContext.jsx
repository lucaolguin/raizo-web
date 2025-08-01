import React, { createContext, useContext, useReducer } from 'react';

const CarritoContext = createContext();

const initialState = {
  carrito: JSON.parse(localStorage.getItem('carrito')) || [],
};

const carritoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const newCarrito = [...state.carrito, action.payload];
      localStorage.setItem('carrito', JSON.stringify(newCarrito));
      return { ...state, carrito: newCarrito };
    case 'REMOVE_ITEM':
      const updatedCarrito = state.carrito.filter(item => item.id !== action.payload);
      localStorage.setItem('carrito', JSON.stringify(updatedCarrito));
      return { ...state, carrito: updatedCarrito };
    case 'CLEAR_CART':
      localStorage.removeItem('carrito');
      return { ...state, carrito: [] };
    default:
      return state;
  }
};

export const CarritoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(carritoReducer, initialState);
  const addItem = (item) => dispatch({ type: 'ADD_ITEM', payload: item });
  const removeItem = (id) => dispatch({ type: 'REMOVE_ITEM', payload: id });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  return (
    <CarritoContext.Provider value={{ carrito: state.carrito, addItem, removeItem, clearCart }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => useContext(CarritoContext);
