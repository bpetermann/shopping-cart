import React, { useState, useEffect, useContext } from 'react';
import classes from './App.module.css';

import Header from './components/Header/Header';
import Searchbar from './components/Header/Searchbar';
import ShoppingList from './components/Main/ShoppingList';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import Wishlist from './components/Wishlist/Wishlist';
import useFetchShop from './hooks/use-fetchshop';
import WishlistContext from './store/wishlist-context';
import CartContext from './store/cart-context';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const cartCtx = useContext(CartContext);
  const wishlistCtx = useContext(WishlistContext);
  const fetchShopData = useFetchShop();
  const { storeItems, error, fetchStoreItems } = fetchShopData;

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
    content = <ShoppingList selectedItems={filteredItems} />;
  }

  if (error) {
    content = <p className={classes.error}>{error}</p>;
  }

  return (
    <div className={classes.container}>
      {cartCtx.showShoppingCart && <Cart />}
      {wishlistCtx.showWishlist && <Wishlist />}
      <Header />
      <Searchbar onChangeSearchTerm={searchTermChangeHandler} />
      <React.Fragment>{content}</React.Fragment>
      <Footer />
    </div>
  );
}

export default App;
