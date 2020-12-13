import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Azuki from '../assets/Azuki.png';

export const Balance = () => {
  const { transactions, loading } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);
  return (
    <>
      {loading ? (
        <img src={Azuki} />
      ) : (
        <>
          <h4>Your balance</h4>
          <h1>¥{total.toLocaleString()}</h1>
        </>
      )}
    </>
  );
};
