import React from 'react';
import logo from '../../assets/images/logo.png';
import arrowRight from '../../assets/images/arrow-right.png';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.fixed_header}>
    <img className={styles.img_logo} src={logo} alt="logo" />
    <div className={styles.right_header}>
      <span className={styles.header_text}>What is a Statement Page?</span>
      <img className={styles.img_arrow_right} src={arrowRight} alt="arrow_right" />
    </div>
  </header>
);

export default Header;
