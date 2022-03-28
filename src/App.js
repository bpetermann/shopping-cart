import React, { useState, useEffect } from 'react';
import classes from './App.module.css';

import Header from './components/Header/Header';
import Searchbar from './components/Header/Searchbar';
import ShoppingList from './components/Main/ShoppingList';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import Wishlist from './components/Wishlist/Wishlist';
import useFetchShop from './hooks/use-fetchshop';

function App() {
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [wishListItems, setWishListItems] = useState([]);
  const [showWishList, setShowWishList] = useState(false);

  const fetchShopData = useFetchShop();
  const { storeItems, error, fetchStoreItems } = fetchShopData;

  const addToWishlistHandler = (shopItem) => {
    setWishListItems(wishListItems.concat(shopItem));
  };

  const removeFromWishlistHandler = (shopItem) => {
    setWishListItems(
      wishListItems.filter((item) => item.name !== shopItem.name)
    );
  };

  const wishlistToggleHandler = (origin) => {
    if (wishListItems.length === 0 && origin === 'wishListBtn') {
      return;
    }
    setShowWishList((prevState) => !prevState);
  };

  const shoppingCartToggleHandler = () => {
    setShowShoppingCart((prevState) => !prevState);
  };

  const searchTermChangeHandler = (text) => {
    setSearchTerm(text);
  };

  let filteredItems = storeItems.filter((item) => {
    return item.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  useEffect(() => {
    fetchStoreItems();
  }, [fetchStoreItems]);

  let content = <p className={classes.error}>Loading...</p>;

  if (storeItems.length > 0) {
    content = (
      <ShoppingList
        selectedItems={filteredItems}
        addToWishlist={addToWishlistHandler}
        removeFromWishlist={removeFromWishlistHandler}
        wishListItems={wishListItems}
      />
    );
  }

  if (error) {
    content = <p className={classes.error}>{error}</p>;
  }

  return (
    <div className={classes.container}>
      {showShoppingCart && (
        <Cart shoppingCartToggle={shoppingCartToggleHandler} />
      )}
      {showWishList && (
        <Wishlist
          wishlistToggle={wishlistToggleHandler}
          removeFromWishlist={removeFromWishlistHandler}
          wishListItems={wishListItems}
        />
      )}
      <Header
        shoppingCartToggle={shoppingCartToggleHandler}
        showWishList={wishlistToggleHandler}
      />
      <Searchbar onChangeSearchTerm={searchTermChangeHandler} />
      <React.Fragment>{content}</React.Fragment>
      <Footer />
    </div>
  );
}

export default App;
