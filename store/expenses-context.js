import { createContext, useReducer, useState } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ des, price, date, user, type }) => {},
  deleteExpense: (id) => {},
  setExpense: (expenses) => {},
  updateExpense: (id, { des, price, date, user, type }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];
    case "SET":
      const inverted = action.payload.reverse();
      return inverted;
    case "UPDATE":
      const updateableIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updateableExpense = state[updateableIndex];
      const updateItem = { ...updateableExpense, ...action.payload.data };
      const updateExpenses = [...state];
      updateExpenses[updateableIndex] = updateItem;

      return updateExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }
  function setExpense(expenses) {
    dispatch({ type: "SET", payload: expenses });
  }
  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }
  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    setExpense: setExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}
export default ExpensesContextProvider;
