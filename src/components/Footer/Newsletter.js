import classes from './Newsletter.module.css';

const Newsletter = () => {
  return (
    <div className={classes.container}>
      <h2>JOIN OUR NEWSLETTER!</h2>
      <form className={classes.formContainer}>
        <input
          className={classes.emailadress}
          type='email'
          id='email'
          name='email'
          placeholder='Your Email'
        />
        <div>
          <h3 className={classes.selectHeader}>I'm mostly interested in</h3>
          <input
            type='radio'
            id='wfashion'
            name='wfashion'
            value='wfashion'
          />
          <label htmlFor='wfashion'>Women's Fahsion</label>
        </div>
        <div>
          <input type='radio' id='mfashion' name='mfashion' value='mfashion' />
          <label htmlFor='mfashion'>Men's Fashion</label>
        </div>
        <input type='submit' value='Add my Email' className={classes.button} />
      </form>
    </div>
  );
};

export default Newsletter;
