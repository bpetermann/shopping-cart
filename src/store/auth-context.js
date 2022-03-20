import React, { useState } from 'react';

const AuthContext = React.createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const AuthContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

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
      setCartItems(updatedItems);
    } else {
      setCartItems(cartItems.concat(shopItem));
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
      setCartItems(updatedItems);
    } else {
      setCartItems(
        cartItems.filter((item) => item.name !== shopItem.name)
      );
    }
  };

  return (
    <AuthContext.Provider
      value={{
        cartItems: cartItems,
        addToCart: addItemHandler,
        removeFromCart: removeItemHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
