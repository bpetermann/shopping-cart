import classes from './Introduction.module.css';

const Introduction = (props) => {
  return (
    <div className={classes.container}>
        <div className={classes.advertise}>
        <h2>DROP 02 SUMMER 2022</h2>
        <p>The 3 Pairs of Shoes You Need for this Summer</p>
        </div>
      <img src={require('../../images/model.png')} alt='Sneaker Model'
      className={classes.image} />
    </div>
  );
};

export default Introduction;
