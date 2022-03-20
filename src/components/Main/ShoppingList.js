import classes from './ShoppingList.module.css';
import ShoppingItem from './ShoppingItem';

const ShoppingList = () => {
  return (
    <div className={classes.container}>
      <ShoppingItem />
    </div>
  );
};

export default ShoppingList;
