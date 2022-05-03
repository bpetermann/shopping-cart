import React, { useState, useContext, useEffect } from 'react';
import classes from './App.module.css';

import Header from './components/Header/Header';
import Searchbar from './components/Header/Searchbar';
import ShoppingList from './components/Main/ShoppingList';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import Wishlist from './components/Wishlist/Wishlist';
import WishlistContext from './store/wishlist-context';
import CartContext from './store/cart-context';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [storeItems, setStoreItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { getStoredCartItems, showShoppingCart } = useContext(CartContext);
  const { getStoredWishlistItems, showWishlist } = useContext(WishlistContext);

  useEffect(() => {
    fetchStoreItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchStoreItems = async () => {
    const response = await fetch(
      `https://my-json-server.typicode.com/bpetermann/shopping-cart-jsonserver/storeItems`
    );
    const data = await response.json();
    setStoreItems(data);
    setIsLoading(false);
    getStoredWishlistItems(data);
    getStoredCartItems(data);
  };

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
      <ShoppingList selectedItems={filteredItems} isLoading={isLoading} />
      <Footer />
    </div>
  );
}

export default App;
