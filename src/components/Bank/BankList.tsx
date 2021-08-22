import React, { useState } from 'react';
import banks from './fake';
import Bank from './Bank';
import styles from './Bank.module.css';

const BankList = () => {
  const [activeTab, setActiveTab] = useState('');

  const toggleAccordion = (id: string) => {
    setActiveTab(id);
  };

  return (
    <div className={styles.bank_list_container}>
      <div className={styles.bank_list}>
        <div>
          {banks.map((bank: BankType) => (
            <Bank bank={bank} activeTab={activeTab} toggleAccordion={toggleAccordion} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BankList;
