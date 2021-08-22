import React from 'react';
import styles from './SearchInput.module.css';

interface SearchInputProps {
  handleChange: (value: string) => void
}

const SearchInput = ({ handleChange }: SearchInputProps) => (
  <div className={styles.input_wrapper}>
    {/* <i class="fa fa-user icon"></i> */}
    <input className={styles.search_input} placeholder="Search for your bank" type="text" name="search" autoComplete="off" onChange={(e) => handleChange(e.target.value)} />
  </div>
);

export default SearchInput;
