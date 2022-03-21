import classes from './ShoppingList.module.css';
import ShoppingItem from './ShoppingItem';

const ShoppingList = (props) => {
  return (
    <div className={classes.container}>
      <ShoppingItem selectedItems={props.selectedItems} />
    </div>
  );
};

export default ShoppingList;
