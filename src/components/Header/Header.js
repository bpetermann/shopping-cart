import React, { useContext, useState, useEffect } from 'react';

import classes from './Header.module.css';
import AuthContext from '../../store/auth-context';


const Header = (props) => {
  const ctx = useContext(AuthContext);
  const [cartItemsClass, setCartItemsClass] = useState(`${classes.cartitems}`);

  const totalCartItems = ctx.cartItems.reduce(function (acc, item) {
    return acc + item.amount;
  }, 0);

  useEffect(() => {
    setCartItemsClass(`${classes.cartitems} ${classes.increase}`);
    setTimeout(() => {
      setCartItemsClass(`${classes.cartitems}`);
    }, 300);
  }, [totalCartItems]);

  return (
    <header className={classes.header}>
      <h3>Shopping Cart</h3>
      <button className={classes.cartButton} onClick={props.onClick}>
        Cart <span className={cartItemsClass}>{totalCartItems}</span>
      </button>
    </header>
  );
};

export default Header;
