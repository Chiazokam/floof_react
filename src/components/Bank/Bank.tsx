/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import AccordionDropDown from './AccordionDropDown';
import chevronDown from '../../assets/images/chevron-down.png';
import chevronUp from '../../assets/images/chevron-up.png';
import divider from '../../assets/images/divider.png';
import styles from './Bank.module.css';

interface BankProps {
    bank: BankType
    activeTab: string;
    toggleAccordion: (id: string) => void;
}

const Banks = ({ bank, activeTab, toggleAccordion }: BankProps) => {
  const { id, logo, name } = bank;

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
          {activeTab === id
            ? (<img src={chevronUp} alt="chevron" onClick={() => toggleAccordion('')} />)
            : (<img src={chevronDown} alt="chevron" onClick={() => toggleAccordion(id)} />) }
        </div>
      </div>
      <img className={styles.divider} src={divider} alt="divider" />
      {activeTab === id && (
      <>
        <AccordionDropDown />
        <img className={styles.divider} src={divider} alt="divider" />
      </>
      )}
    </>
  );
};

export default Banks;
