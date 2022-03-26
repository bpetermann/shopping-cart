import React, { useContext } from 'react';
import classes from './ShoppingItem.module.css';
import CartContext from '../../store/cart-context';

const ShoppingItem = (props) => {
  const ctx = useContext(CartContext);

  return (
    <React.Fragment>
      {props.selectedItems.map((item) => {
        return (
          <div className={classes.wrapper} key={item.id}>
            <img
              src={require('../../images/' + item.name + '.png')}
              alt={item.name}
              className={classes.image}
            />
            <button
              className={`${classes['favorite']} ${
                props.wishListItems.includes(item) && classes.fav
              }`}
              onClick={() => props.addToFavorites(item)}
            >
              <img
                src={require('../../images/heart.png')}
                alt={'Add Item to your Wishlist'}
                className={classes.image}
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

export default ShoppingItem;
