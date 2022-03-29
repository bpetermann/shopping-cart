import React, { useContext } from 'react';

import classes from './Header.module.css';
import CartContext from '../../store/cart-context';
import WishlistContext from '../../store/wishlist-context';

const Header = () => {
  const cartCtx = useContext(CartContext);
  const wishlistCtx = useContext(WishlistContext);

  const totalCartItems = cartCtx.cartItems.reduce(function (acc, item) {
    return acc + item.amount;
  }, 0);

  const totalWishlistItems = wishlistCtx.wishlistItems.length;

  return (
    <header className={classes.container}>
      <h2>Shopping Cart</h2>
      <div className={classes.btnContainer}>
        <button
          onClick={() => wishlistCtx.wishlistToggle('wishListBtn')}
          className={classes.wishList}
        >
          <img
            src={require('../../images/heart.png')}
            alt={'Wish list'}
            className={classes.image}
          />
          <span className={classes.wishlistAmountBtn}>
            {totalWishlistItems}
          </span>
        </button>
        <button
          className={classes.cartButton}
          onClick={cartCtx.shoppingCartToggle}
        >
          <img
            src={require('../../images/cart.png')}
            alt={'Shopping Cart'}
            className={classes.cartImage}
          />
          <span className={classes.cartAmountBtn}>{totalCartItems}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
