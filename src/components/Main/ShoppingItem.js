import React, { useContext } from 'react';
import classes from './ShoppingItem.module.css';
import CartContext from '../../store/cart-context';

const ShoppingItem = (props) => {
  const ctx = useContext(CartContext);

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
            {props.wishListItems.includes(item) ? (
              <button
                className={classes.wishlistBtn}
                onClick={() => props.removeFromWishlist(item)}
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
                onClick={() => props.addToWishlist(item)}
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
              onClick={() => ctx.addToCart(item)}
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
