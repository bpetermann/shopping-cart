import React from 'react';
import classes from './ShoppingList.module.css';
import ShoppingItem from './ShoppingItem';
import Introduction from './Introduction';
import Spinner from '../shared/Spinner';

const ShoppingList = ({ isLoading, selectedItems }) => {
  return (
    <React.Fragment>
      <Introduction />

      <div className={classes.container}>
        {isLoading ? (
          <Spinner />
        ) : (
          <ShoppingItem selectedItems={selectedItems} />
        )}
      </div>
    </React.Fragment>
  );
};

export default ShoppingList;
