import classes from './Searchbar.module.css';

const Searchbar = () => {
  return (
    <div className={classes.searchbar}>
      <button className={classes.toggleButton}>
        <span className={classes.toggleButton__bar}></span>
        <span className={classes.toggleButton__bar}></span>
        <span className={classes.toggleButton__bar}></span>
      </button>
      <input className={classes.search} type='text' placeholder='Search' />
    </div>
  );
};

export default Searchbar;
