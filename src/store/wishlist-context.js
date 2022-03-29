import React, { useState, useEffect } from 'react';
import storeItems from '../database/store-items';

const WishlistContext = React.createContext({
  wishlistItems: [],
  addToWishlist: () => {},
  removeFromWishlist: () => {},
});

export const WishlistContextProvider = (props) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [showWishlist, setshowWishlist] = useState(false);

  useEffect(() => {
    if (localStorage.length !== 0) {
      const items = storeItems;
      const initialWishlistItems = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        const index = items.findIndex((item) => item.id === key);
        if (index !== -1 && value === 'wishlistItem') {
          const storedItem = items[index];
          initialWishlistItems.push(storedItem);
        }
      }
      setWishlistItems(initialWishlistItems);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addToWishlistHandler = (shopItem) => {
    setWishlistItems(wishlistItems.concat(shopItem));
    localStorage.setItem(shopItem.id, 'wishlistItem');
  };

  const removeFromWishlistHandler = (shopItem) => {
    setWishlistItems(
      wishlistItems.filter((item) => item.name !== shopItem.name)
    );
    localStorage.removeItem(shopItem.id);
  };

  const wishlistToggleHandler = (origin) => {
    if (wishlistItems.length === 0 && origin === 'wishListBtn') {
      return;
    }
    setshowWishlist((prevState) => !prevState);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems: wishlistItems,
        showWishlist: showWishlist,
        addToWishlist: addToWishlistHandler,
        removeFromWishlist: removeFromWishlistHandler,
        wishlistToggle: wishlistToggleHandler,
      }}
    >
      {props.children}
    </WishlistContext.Provider>
  );
};

export default WishlistContext;
