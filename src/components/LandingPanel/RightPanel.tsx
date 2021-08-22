import React, { useState } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import BankList from '../Bank/BankList';
import styles from './LandingPanel.module.css';

const RighPanel = () => {
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const handleChange = (value: string) => {
    setSearchValue(value);
  };

  return (
    <section className={styles.right_panel}>
      <div className={styles.phone}>
        <h3 className={styles.phone_h3}>Choose your bank</h3>
        <SearchInput handleChange={handleChange} />
        <BankList searchValue={searchValue} />
      </div>
    </section>
  );
};

export default RighPanel;
