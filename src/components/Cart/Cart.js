import classes from './Cart.module.css';
import React, { useContext } from 'react';
import Backdrop from '../Modal/Backdrop';
import CartContext from '../../store/cart-context';
import CartItems from './CartItems';

const Cart = (props) => {
  const ctx = useContext(CartContext);

  const totalPrice = ctx.cartItems.reduce(function (acc, item) {
    return acc + item.amount * item.price;
  }, 0);

  return (
    <React.Fragment>
      <Backdrop onClose={props.onClick} />
      <div className={classes.container}>
        <CartItems />
        {totalPrice > 0 && (
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalPrice.toFixed(2)} $</span>
          </div>
        )}
        {totalPrice > 0 ? (
          <button className={classes.orderButton}>Order</button>
        ) : (
          <button onClick={props.onClick} className={classes.orderButton}>
            No items (yet!)
          </button>
        )}
      </div>
    </React.Fragment>
  );
};

export default Cart;
