import { useState } from 'react';

import Header from './components/Header/Header';
import Searchbar from './components/Header/Searchbar';
import ShoppingList from './components/Main/ShoppingList';
import classes from './App.module.css';
import Introduction from './components/Main/Introduction';
import Footer from './components/Footer/Footer';
import Newsletter from './components/Footer/Newsletter';
import Cart from './components/Cart/Cart';

function App() {
  const [showShoppingCart, setShowShoppingCart] = useState(false);

  const shoppingCartToggler = () => {
    setShowShoppingCart((prevState) => !prevState);
  };

  return (
    <div className={classes.container}>
      {showShoppingCart && <Cart onClick={shoppingCartToggler} />}
      <Header onClick={shoppingCartToggler} />
      <Searchbar />
      <Introduction />
      <ShoppingList />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
