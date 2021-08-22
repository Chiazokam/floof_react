import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Bank from '../../components/Bank/Bank';
import Loader from '../../components/Loader/Loader';
import fetchBanks from '../../utils/fetchBanks';
import styles from './BankList.module.css';

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
