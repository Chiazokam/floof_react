import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import BankList from '../Bank/BankList';
import styles from './LandingPanel.module.css';

const RighPanel = () => (
  <section className={styles.right_panel}>
    <div className={styles.phone}>
      <h3 className={styles.phone_h3}>Choose your bank</h3>
      <SearchInput />
      <BankList />
    </div>
  </section>
);

export default RighPanel;
