import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from '../Main/ShoppingItem.module.css';

const WishlistItems = (props) => {
  const ctx = useContext(CartContext);

  return (
    <React.Fragment>
      {props.wishListItems.map((item) => {
        return (
          <div className={classes.container} key={item.id}>
            <img
              src={require('../../images/' + item.name + '.png')}
              alt={item.name}
              className={classes.image}
            />
            <button
              className={classes.wishlistBtn}
              onClick={() => props.removeFromWishlist(item)}
            >
              <img
                src={require('../../images/heart-full.png')}
                alt={item.name}
                className={classes.wishlistHeartBtn}
              />
            </button>
            <div className={classes.description}>{item.description}</div>
            <div className={classes.price}>{item.price} $</div>
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

export default WishlistItems;
