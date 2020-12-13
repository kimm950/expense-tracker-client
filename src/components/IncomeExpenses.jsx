import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Azuki from '../assets/Azuki.png';

export const IncomeExpenses = () => {
  const { transactions, loading } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc = acc + item), 0);
  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc = acc + item), 0);

  return (
    <div className="income-container">
      {loading ? (
        <img src={Azuki} />
      ) : (
        <div className="income">
          <h4>INCOME</h4>
          <p className="money money-in">＋¥{income.toLocaleString()}</p>
        </div>
      )}
      {loading ? (
        <img src={Azuki} />
      ) : (
        <div className="expense">
          <h4>EXPENSE</h4>
          <p className="money money-out">
            －¥{Math.abs(expense).toLocaleString()}
          </p>
        </div>
      )}
    </div>
  );
};
