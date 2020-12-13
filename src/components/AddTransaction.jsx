import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [isExpense, togglePlusOrMinus] = useState(false);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) return alert('Please fill text');
    if (!amount) return alert('Please fill amount');

    const definedAmount = Number(isExpense ? `- ${amount}` : amount);

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      amount: definedAmount,
    };

    addTransaction(newTransaction);
    setText('');
    setAmount(0);
  };

  return (
    <>
      <h3>Add new transation</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text" className="label">
            Text
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount" className="label">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <div className="amount-container">
            <>
              {isExpense ? (
                <button
                  className="btn minus"
                  type="button"
                  onClick={() => togglePlusOrMinus(!isExpense)}
                >
                  －
                </button>
              ) : (
                <button
                  className="btn plus"
                  type="button"
                  onClick={() => togglePlusOrMinus(!isExpense)}
                >
                  ＋
                </button>
              )}
            </>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount..."
            />
          </div>
        </div>
        <button type="submit" className="transaction-btn">
          Add transaction
        </button>
      </form>
    </>
  );
};
