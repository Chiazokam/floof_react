import React from 'react';
import Header from '../Header/Header';
import LandingPanel from '../LandingPanel/LandingPanel';
import styles from './Landing.module.css';

const Landing = () => (
  <div className={styles.background}>
    <Header />
    <LandingPanel />
  </div>
);

export default Landing;
