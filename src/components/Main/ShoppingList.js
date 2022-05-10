import React from 'react';
import classes from './ShoppingList.module.css';
import ShoppingItem from './ShoppingItem';
import Introduction from './Introduction';
import Spinner from '../shared/Spinner';

const ShoppingList = ({ isLoading, selectedItems, error }) => {
  let content = isLoading ? (
    <Spinner />
  ) : (
    <ShoppingItem selectedItems={selectedItems} />
  );

  if (error) {
    content = <span className={classes.error}>{error}</span>;
  }

  return (
    <React.Fragment>
      <Introduction />
      <div className={classes.container}>{content}</div>
    </React.Fragment>
  );
};

export default ShoppingList;
