import React, { useState } from 'react';

const WishlistContext = React.createContext({
  wishlistItems: [],
  addToWishlist: () => {},
  removeFromWishlist: () => {},
});

export const WishlistContextProvider = (props) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [showWishlist, setshowWishlist] = useState(false);

  const getStoredWishlistItems = (storeItems) => {
    if (localStorage.length !== 0) {
      const items = storeItems;
      const initialWishlistItems = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        const index = items.findIndex((item) => item.id === value);
        if (index !== -1) {
          const storedItem = items[index];
          initialWishlistItems.push(storedItem);
        }
      }
      setWishlistItems(initialWishlistItems);
    }
  };

  const addToWishlistHandler = (shopItem) => {
    setWishlistItems(wishlistItems.concat(shopItem));
    localStorage.setItem(`wishlistItem${shopItem.id}`, shopItem.id);
  };

  const removeFromWishlistHandler = (shopItem) => {
    setWishlistItems(
      wishlistItems.filter((item) => item.name !== shopItem.name)
    );
    localStorage.removeItem(`wishlistItem${shopItem.id}`);
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
        getStoredWishlistItems,
      }}
    >
      {props.children}
    </WishlistContext.Provider>
  );
};

export default WishlistContext;
