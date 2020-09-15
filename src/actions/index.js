import { todosRef, expensesRef } from "../config/firebase";
import { FETCH_TODOS, FETCH_EXPENSES } from "./types";

// EXPENSES ACTIONS
export const addExpense = newExpense => async dispatch => {
  expensesRef.push().set(newExpense);
};

export const removeExpense = removeExpenseId => async dispatch => {
  expensesRef.child(removeExpenseId).remove();
};

export const fetchExpenses = () => async dispatch => {
  expensesRef.on("value", snapshot => {
    dispatch({
      type: FETCH_EXPENSES,
      payload: snapshot.val()
    });
  });
};

// TODO ACTIONS
export const addToDo = newToDo => async dispatch => {
  todosRef.push().set(newToDo);
};

export const completeToDo = completeToDoId => async dispatch => {
  todosRef.child(completeToDoId).remove();
};

export const fetchToDos = () => async dispatch => {
  todosRef.on("value", snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val()
    });
  });
};
