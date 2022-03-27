import React from 'react';
import classes from './Wishlist.module.css';
import Backdrop from '../Modal/Backdrop';
import WishlistItems from './WishlistItems';

const Wishlist = (props) => {
  return (
    <React.Fragment>
      <Backdrop onClose={props.onClick} />
      
      <div className={classes.container}>
        <div className={classes.btnContainer}>
      <button onClick={props.wishlistToggle} className={classes.closeWishlistBtn}>
          X
        </button>
        </div>
        <WishlistItems
          wishListItems={props.wishListItems}
          removeFromWishlist={props.removeFromWishlist}
        />
      </div>
    </React.Fragment>
  );
};

export default Wishlist;
