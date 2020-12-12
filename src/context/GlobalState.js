import Axios from 'axios';
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { getEnvironment } from './enviornment';

// Initial State

const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

// Global context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function getTransactions() {
    try {
      const res = await Axios.get(`${getEnvironment()}/api/transactions`);
      dispatch({
        type: 'GET_TRANSACTION',
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: 'ERROR_TRANSACTION',
        payload: error.response.data.error,
      });
    }
  }

  // Actions

  async function addTransaction(transaction) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await Axios.post(
        `${getEnvironment()}/api/transactions`,
        transaction,
        config
      );
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: 'ERROR_TRANSACTION',
        payload: error.response.data.error,
      });
    }
  }

  async function deleteTransaction(id) {
    try {
      await Axios.delete(`${getEnvironment()}/api/transactions/${id}`);

      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: 'ERROR_TRANSACTION',
        payload: error.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        getTransactions,
        addTransaction,
        deleteTransaction,
        error: state.error,
        loading: state.loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
