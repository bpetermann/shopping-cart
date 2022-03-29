import React, { useContext } from 'react';
import classes from './ShoppingItem.module.css';
import CartContext from '../../store/cart-context';
import WishlistContext from '../../store/wishlist-context';

const ShoppingItem = (props) => {
  const cartCtx = useContext(CartContext);
  const wishlistCtx = useContext(WishlistContext);

  return (
    <React.Fragment>
      {props.selectedItems.map((item) => {
        return (
          <div className={classes.container} key={item.id}>
            <img
              src={require('../../images/' + item.name + '.png')}
              alt={item.name}
              className={classes.image}
            />
            {wishlistCtx.wishlistItems.includes(item) ? (
              <button
                className={classes.wishlistBtn}
                onClick={() => wishlistCtx.removeFromWishlist(item)}
              >
                <img
                  src={require('../../images/heart-full.png')}
                  alt={'Item is on your Wishlist'}
                  className={`${classes.wishlistHeartBtn} ${classes.bump}`}
                />
              </button>
            ) : (
              <button
                className={classes.wishlistBtn}
                onClick={() => wishlistCtx.addToWishlist(item)}
              >
                <img
                  src={require('../../images/heart.png')}
                  alt={'Add Item to your Wishlist'}
                  className={classes.heartBtn}
                />
              </button>
            )}

            <div className={classes.description}>{item.description}</div>
            <div>{item.price} $</div>
            <button
              className={classes.button}
              onClick={() => cartCtx.addToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default ShoppingItem;
