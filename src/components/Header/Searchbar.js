import classes from './Searchbar.module.css';

const Searchbar = (props) => {
  
  const searchTermHandler = (event) => {
    props.onChangeSearchTerm(event.target.value);
  };

  return (
    <div className={classes.container}>
      <button className={classes.toggleButton}>
        <span className={classes.toggleButton__bar}></span>
        <span className={classes.toggleButton__bar}></span>
        <span className={classes.toggleButton__bar}></span>
      </button>
      <input
        className={classes.search}
        type='text'
        placeholder='Search'
        onChange={searchTermHandler}
      />
    </div>
  );
};

export default Searchbar;
