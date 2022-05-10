import React, { useState } from 'react';
import classes from './App.module.css';
import Header from './components/Header/Header';
import Searchbar from './components/Header/Searchbar';
import ShoppingList from './components/Main/ShoppingList';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import Wishlist from './components/Wishlist/Wishlist';
import useStoreItems from './hooks/useStoreItems';
const STOREITEMS_URL = process.env.REACT_APP_STOREITEMS_URL;

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const { storeItems, isLoading, error, showShoppingCart, showWishlist } =
    useStoreItems(`${STOREITEMS_URL}`, {});

  const searchTermChangeHandler = (text) => {
    setSearchTerm(text);
  };

  let filteredItems = storeItems.filter((item) => {
    return item.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className={classes.container}>
      {showShoppingCart && <Cart />}
      {showWishlist && <Wishlist />}
      <Header />
      <Searchbar onChangeSearchTerm={searchTermChangeHandler} />
      <ShoppingList
        selectedItems={filteredItems}
        isLoading={isLoading}
        error={error}
      />
      <Footer />
    </div>
  );
}

export default App;
