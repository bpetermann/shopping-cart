import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div className={classes.container}>
      <ul className={classes.navbar}>
        <li>
          <a href='home.asp'>Home</a>
        </li>
        <li>
          <a href='contact.asp'>Contact</a>
        </li>
        <li>
          <a href='about.asp'>About</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
