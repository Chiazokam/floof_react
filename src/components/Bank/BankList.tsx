import React from 'react';
import banks from './fake';
import Bank from './Bank';
import styles from './Bank.module.css';

const BankList = () => (
  <div className={styles.bank_list_container}>
    <div className={styles.bank_list}>
      {banks.map((bank: BankType) => (
        <Bank bank={bank} />
      ))}
    </div>
  </div>
);

export default BankList;
