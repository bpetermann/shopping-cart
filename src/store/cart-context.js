import React, { useState } from 'react';

const CartContext = React.createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  shoppingCartToggle: () => {},
});

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [showShoppingCart, setShowShoppingCart] = useState(false);

  const getStoredCartItems = (storeItems) => {
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
  };

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

  const shoppingCartToggleHandler = () => {
    setShowShoppingCart((prevState) => !prevState);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems,
        showShoppingCart: showShoppingCart,
        addToCart: addItemHandler,
        removeFromCart: removeItemHandler,
        shoppingCartToggle: shoppingCartToggleHandler,
        getStoredCartItems
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
