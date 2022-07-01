import classes from './Logo.module.css';

const Logo = () => {
  return (
    <div className={classes['logo']}>
      <img
        src={require('../../images/logo-icon.png')}
        alt={'React Logo'}
        className={classes['logo-icon']}
      />
      shopping cart
    </div>
  );
};

export default Logo;
