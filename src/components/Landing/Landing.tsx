import React, { Fragment } from 'react';
import bgImage from '../../assets/images/background_image.png';
import Header from '../Header/Header';
import styles from './Landing.module.css';

const Landing = () => (
  <>
    <img className={styles.bg_img} src={bgImage} alt="Background Image" />
    <Header />
    <div className={styles.welcome_text}>Give Floof access to your financial data</div>
  </>
);

export default Landing;
