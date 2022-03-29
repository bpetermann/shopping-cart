import React, { useState, useContext } from 'react';
import classes from './App.module.css';

import Header from './components/Header/Header';
import Searchbar from './components/Header/Searchbar';
import ShoppingList from './components/Main/ShoppingList';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import Wishlist from './components/Wishlist/Wishlist';
import WishlistContext from './store/wishlist-context';
import CartContext from './store/cart-context';
import storeItems from './database/store-items';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const cartCtx = useContext(CartContext);
  const wishlistCtx = useContext(WishlistContext);

  const searchTermChangeHandler = (text) => {
    setSearchTerm(text);
  };

  let filteredItems = storeItems.filter((item) => {
    return item.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className={classes.container}>
      {cartCtx.showShoppingCart && <Cart />}
      {wishlistCtx.showWishlist && <Wishlist />}
      <Header />
      <Searchbar onChangeSearchTerm={searchTermChangeHandler} />
      <ShoppingList selectedItems={filteredItems} />
      <Footer />
    </div>
  );
}

export default App;
