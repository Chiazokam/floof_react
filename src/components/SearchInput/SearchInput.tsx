import React from 'react';
import styles from './SearchInput.module.css';

const SearchInput = () => (
  <div className={styles.input_wrapper}>
    {/* <i class="fa fa-user icon"></i> */}
    <input className={styles.search_input} placeholder="Search for your bank" type="text" name="search" />
  </div>
);

export default SearchInput;
