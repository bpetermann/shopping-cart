import React from 'react';
import classes from './Footer.module.css';
import Newsletter from './Newsletter';

const Footer = () => {
  return (
    <React.Fragment>
      <Newsletter />
      <div className={classes.container}>
        <ul className={classes.navbar}>
          <li>
            <a href='https://github.com/bpetermann/shopping-cart'>Home</a>
          </li>
          <li>
            <a href='https://github.com/bpetermann/shopping-cart'>Contact</a>
          </li>
          <li>
            <a href='https://github.com/bpetermann/shopping-cart'>About</a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Footer;
