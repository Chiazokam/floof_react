/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import chevronDown from '../../assets/images/chevron-down.png';
import divider from '../../assets/images/divider.png';
import styles from './Bank.module.css';

interface BankProps {
    bank: BankType
}

const Banks = ({ bank }: BankProps) => {
  const { logo, name } = bank;
  //   const

  //   const toggleAccordion = (id: string) => {

  //   };
  return (
    <>
      <div className={styles.bank_card}>
        <div className={styles.bank_logo}>
          <img src={logo} alt="bank logo" />
        </div>
        <div className={styles.bank_name}>
          {name}
        </div>
        <div className={styles.chevron}>
          <img src={chevronDown} alt="chevron" />
        </div>
      </div>
      <img className={styles.divider} src={divider} alt="divider" />
    </>
  );
};

export default Banks;
