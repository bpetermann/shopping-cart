import { useState } from 'react';
import classes from './App.module.css';

import Header from './components/Header/Header';
import Searchbar from './components/Header/Searchbar';
import ShoppingList from './components/Main/ShoppingList';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';

import storeItems from './database/store-items';

function App() {
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const shoppingCartToggler = () => {
    setShowShoppingCart((prevState) => !prevState);
  };

  const searchTermChangeHandler = (text) => {
    setSearchTerm(text);
  };

  const filteredItems = storeItems.filter((item) => {
    return item.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className={classes.container}>
      {showShoppingCart && <Cart onClick={shoppingCartToggler} />}
      <Header onClick={shoppingCartToggler} />
      <Searchbar onChangeSearchTerm={searchTermChangeHandler} />
      <ShoppingList selectedItems={filteredItems} />
      <Footer />
    </div>
  );
}

export default App;
