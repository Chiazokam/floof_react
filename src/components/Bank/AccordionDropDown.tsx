import React from 'react';
import styles from './Bank.module.css';

const AccordionDropDown = () => (
  <div className={styles.accordion_wrapper}>
    <h3 className={styles.list_heading}>Floof will be able to access your:</h3>
    <ul className={styles.access_list}>
      <li className={styles.access_list_item}>Account holder name</li>
      <li className={styles.access_list_item}>Account type</li>
      <li className={styles.access_list_item}>Account transaction history</li>
      <li className={styles.access_list_item}>Account balance</li>
    </ul>
    <button className={styles.more_info_button} type="button">More Info</button>
  </div>
);

export default AccordionDropDown;
