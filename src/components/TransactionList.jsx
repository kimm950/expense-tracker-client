import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';
import Mame from '../assets/Mame.png';

export const TransactionList = () => {
  const { transactions, getTransactions, loading } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <>
      <h3>History</h3>
      {loading ? (
        <>
          <img src={Mame} />
          <img src={Mame} />
          <img src={Mame} />
        </>
      ) : (
        <ul>
          {transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      )}
    </>
  );
};
