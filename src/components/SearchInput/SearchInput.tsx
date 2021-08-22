import React from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './SearchInput.module.css';

interface SearchInputProps {
  handleChange: React.ChangeEventHandler<HTMLInputElement>
}

const prefix = (
  <SearchOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const SearchInput = ({ handleChange }: SearchInputProps) => (
  <div className={styles.input_wrapper}>
    <Input
      className={styles.search_input}
      placeholder="Search for your bank"
      size="large"
      prefix={prefix}
      onChange={handleChange}
    />
  </div>
);

export default SearchInput;
