import React, { useEffect, useState } from 'react';
import storeItems from '../database/store-items';

const CartContext = React.createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (localStorage.length !== 0) {
      const items = storeItems;
      const initialCartItems = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = parseInt(localStorage.getItem(key));
        const index = items.findIndex((item) => item.id === key);
        if (index !== -1) {
          const storedItem = {
            ...items[index],
            amount: value,
          };
          initialCartItems.push(storedItem);
        }
      }
      setCartItems(initialCartItems);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addItemHandler = (shopItem) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.name === shopItem.name
    );
    const existingCartItem = cartItems[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + 1,
      };
      updatedItems = [...cartItems];
      updatedItems[existingCartItemIndex] = updatedItem;
      localStorage.setItem(shopItem.id, updatedItem.amount);
      setCartItems(updatedItems);
    } else {
      setCartItems(cartItems.concat(shopItem));
      localStorage.setItem(shopItem.id, shopItem.amount);
    }
  };

  const removeItemHandler = (shopItem) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.name === shopItem.name
    );
    const existingCartItem = cartItems[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem.amount > 1) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...cartItems];
      updatedItems[existingCartItemIndex] = updatedItem;
      localStorage.setItem(shopItem.id, updatedItem.amount);
      setCartItems(updatedItems);
    } else {
      setCartItems(cartItems.filter((item) => item.name !== shopItem.name));
      localStorage.removeItem(shopItem.id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems,
        addToCart: addItemHandler,
        removeFromCart: removeItemHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
