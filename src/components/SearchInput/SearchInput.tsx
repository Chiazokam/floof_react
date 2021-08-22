import React from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import search from '../../assets/images/search.png';
import styles from './SearchInput.module.css';

interface SearchInputProps {
  handleChange: React.ChangeEventHandler<HTMLInputElement>
}

const SearchInput = ({ handleChange }: SearchInputProps) => (
  <FormControl fullWidth variant="outlined" className={styles.form_control}>
    <OutlinedInput
      className={styles.search_input}
      placeholder="Search for your bank"
      onChange={handleChange}
      startAdornment={<InputAdornment position="start"><img src={search} alt="search" /></InputAdornment>}
    />
  </FormControl>

);

export default SearchInput;
