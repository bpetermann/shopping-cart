import React from 'react';

import classes from './ShoppingList.module.css';
import ShoppingItem from './ShoppingItem';
import Introduction from './Introduction';

const ShoppingList = (props) => {
  return (
    <React.Fragment>
      <Introduction />
      <div className={classes.container}>
        <ShoppingItem
          selectedItems={props.selectedItems}
          addToWishlist={props.addToWishlist}
          wishListItems={props.wishListItems}
        />
      </div>
    </React.Fragment>
  );
};

export default ShoppingList;
