import React, { useContext } from 'react';
import classes from './Wishlist.module.css';
import Backdrop from '../Modal/Backdrop';
import CartContext from '../../store/cart-context';

const WishList = (props) => {
  const ctx = useContext(CartContext);

  return (
    <React.Fragment>
      <Backdrop onClose={props.onClick} />
      <div className={classes.container}>
        {props.wishListItems.map((item) => {
          return (
            <div className={classes.wrapper} key={item.id}>
              <img
                src={require('../../images/' + item.name + '.png')}
                alt={item.name}
                className={classes.image}
              />
              <button
                className={classes.favorite}
                onClick={() => props.removeFavorite(item)}
              >
                <img src={require('../../images/heart.png')} alt={item.name} />
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
      </div>
    </React.Fragment>
  );
};

export default WishList;
