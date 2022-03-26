import React, { useState, useCallback, useEffect } from 'react';
import classes from './App.module.css';

import Header from './components/Header/Header';
import Searchbar from './components/Header/Searchbar';
import ShoppingList from './components/Main/ShoppingList';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import WishList from './components/Wishlist/WishList';
// import storeItems from './database/store-items';

function App() {
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [storeItems, setStoreItems] = useState([]);
  const [error, setError] = useState(null);
  const [wishListItems, setWishListItems] = useState([]);
  const [showWishList, setShowWishList] = useState(false);

  const addFavoriteItemHandler = (shopItem) => {
    const existingCartItemIndex = wishListItems.findIndex(
      (item) => item.name === shopItem.name
    );
    const existingCartItem = wishListItems[existingCartItemIndex];
    if (existingCartItem) {
      return;
    } else {
      setWishListItems(wishListItems.concat(shopItem));
      wishListToggler();
    }
  };

  const removeFavoriteItemHandler = (shopItem) => {
    setWishListItems(
      wishListItems.filter((item) => item.name !== shopItem.name)
    );
  };

  const fetchStoreItems = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch(
        'https://react-shopping-cart-fe673-default-rtdb.firebaseio.com/storeItems.json'
      );
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedStoreItems = [];

      for (const key in data) {
        loadedStoreItems.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
          amount: data[key].amount,
        });
      }

      setStoreItems(loadedStoreItems);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchStoreItems();
  }, [fetchStoreItems]);

  const shoppingCartToggler = () => {
    setShowShoppingCart((prevState) => !prevState);
  };

  const wishListToggler = () => {
    if (wishListItems.length === 0) {
      return;
    }
    setShowWishList((prevState) => !prevState);
    console.log('clicked');
  };

  const searchTermChangeHandler = (text) => {
    setSearchTerm(text);
  };

  let filteredItems = storeItems.filter((item) => {
    return item.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  let content = <p className={classes.error}>Loading...</p>;

  if (storeItems.length > 0) {
    content = (
      <ShoppingList
        selectedItems={filteredItems}
        addToFavorites={addFavoriteItemHandler}
        wishListItems={wishListItems}
      />
    );
  }

  if (error) {
    content = <p className={classes.error}>{error}</p>;
  }

  return (
    <div className={classes.container}>
      {showShoppingCart && <Cart onClick={shoppingCartToggler} />}
      {showWishList && wishListItems.length !== 0 && (
        <WishList
          onClick={wishListToggler}
          wishListItems={wishListItems}
          removeFavorite={removeFavoriteItemHandler}
        />
      )}
      <Header onClick={shoppingCartToggler} showWishList={wishListToggler} />
      <Searchbar onChangeSearchTerm={searchTermChangeHandler} />
      <React.Fragment>{content}</React.Fragment>
      <Footer />
    </div>
  );
}

export default App;
