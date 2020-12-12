import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const isExpense = transaction.amount < 0;
  const sign = isExpense ? '－' : '＋';

  return (
    <li className={isExpense ? 'out' : 'in'}>
      {transaction.text}
      <span>
        {sign}¥{Math.abs(transaction.amount).toLocaleString()}
      </span>
      <button
        className="remove-button"
        onClick={() => deleteTransaction(transaction._id)}
      >
        x
      </button>
    </li>
  );
};
