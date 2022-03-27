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
    setCartItemsClass(`${classes.cartItems} ${classes.increase}`);
    setTimeout(() => {
      setCartItemsClass(`${classes.cartItems}`);
    }, 300);
  }, [totalCartItems]);

  return (
    <header className={classes.container}>
      <h2>Shopping Cart</h2>
      <div className={classes.btnContainer}>
        <button
          onClick={() => props.showWishList('wishListBtn')}
          className={classes.wishList}
        >
          <img
            src={require('../../images/heart.png')}
            alt={'Wish list'}
            className={classes.image}
          />
        </button>
        <button
          className={classes.cartButton}
          onClick={props.shoppingCartToggle}
        >
          <img
            src={require('../../images/cart.png')}
            alt={'Shopping Cart'}
            className={classes.cartImage}
          />
          <span className={cartItemsClass}>{totalCartItems}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
