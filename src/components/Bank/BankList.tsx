import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import Bank from './Bank';
import Loader from '../Loader/Loader';
import styles from './Bank.module.css';

const fetchBanks = async (query: string | null) => {
  const { data } = await axios.get(`https://floof-backend.herokuapp.com/api/v1/banks${query ? `?search=${query}` : ''}`);
  return data;
};

interface BankListProps {
  searchValue: string | null;
}

const BankList = ({ searchValue }: BankListProps) => {
  const [activeTab, setActiveTab] = useState('');
  const { data, isLoading, error } = useQuery(['banks', searchValue], () => fetchBanks(searchValue));

  const toggleAccordion = (id: string) => {
    setActiveTab(id);
  };
  const banks = (data && data?.data?.rows) ?? [];

  return (
    <div className={styles.bank_list_container}>
      <div className={styles.bank_list}>
        {(error || banks.lenght === 0) && <span>No Banks Found</span>}
        {isLoading ? <Loader /> : (
          <>
            {banks.map((bank: BankType) => (
              <Bank bank={bank} activeTab={activeTab} toggleAccordion={toggleAccordion} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default BankList;
