import React, {useContext} from 'react';
import classes from './ShoppingItem.module.css';
import AuthContext from '../../store/auth-context';
import StoreItems from "../../database/StoreItems"

const ShoppingItem = () => {
  const ctx = useContext(AuthContext);
  return (
    <React.Fragment>
      {StoreItems.map((item) => {
        return (
          <div className={classes.wrapper} key={item.name}>
            <img
              src={require('../../images/' + item.name + '.png')}
              alt={item.name}
              className={classes.image}
            />
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
