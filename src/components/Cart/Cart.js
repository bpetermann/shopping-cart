import classes from './Cart.module.css';
import React, { useContext } from 'react';
import Backdrop from '../Modal/Backdrop';
import CartContext from '../../store/cart-context';
import CartItems from './CartItems';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalPrice = cartCtx.cartItems.reduce(function (acc, item) {
    return acc + item.amount * item.price;
  }, 0);

  return (
    <React.Fragment>
      <Backdrop onClose={cartCtx.shoppingCartToggle} />
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
          <button onClick={cartCtx.shoppingCartToggle} className={classes.orderButton}>
            No items (yet!)
          </button>
        )}
      </div>
    </React.Fragment>
  );
};

export default Cart;
