import React from 'react';
import bgImage from '../../assets/images/background_image.png';
import styles from './LandingPanel.module.css';

const LeftPanel = () => (
  <section className={styles.left_panel}>
    <div className={styles.welcome_text}>Give Floof access to your financial data</div>
    <img className={styles.bg_img} src={bgImage} alt="Background Image" />
  </section>
);

export default LeftPanel;
