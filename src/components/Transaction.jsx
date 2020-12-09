import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '－' : '＋';

  return (
    <li className={transaction.amount < 0 ? 'out' : 'in'}>
      {transaction.text}{' '}
      <span>
        {sign}¥{Math.abs(transaction.amount)}
      </span>
      <button
        className="remove-button"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
};