import React, { useContext, useState, useEffect } from 'react';

import classes from './Header.module.css';
import CartContext from '../../store/cart-context';


const Header = (props) => {
  const ctx = useContext(CartContext);
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
      <div className={classes.container}>
      <button onClick={props.showWishList}
         className={classes.wishList}
            >
              <img
                src={require('../../images/heart.png')}
                alt={"Wish list"}
                className={classes.image}
              />
            </button>
      <button className={classes.cartButton} onClick={props.onClick}>
        Cart <span className={cartItemsClass}>{totalCartItems}</span>
      </button>
      </div>
    </header>
  );
};

export default Header;
