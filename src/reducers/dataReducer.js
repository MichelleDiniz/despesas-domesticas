import { FETCH_TODOS, FETCH_EXPENSES } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return action.payload;
    case FETCH_EXPENSES:
      return action.payload;
    default:
      return state;
  }
};

// All actions triggered from component go through all the reducers. 
// Now each reducer checks the action type and if it’s the type 
// reducer knows, it updates the data in store.

// This is how our reducer will look like. 
// It checks if the action type is FETCH_TODOS and if 
// it is it updates the list of our To Do tasks



// If we would add new reducer we just create new file inside reducers directory. 
// Then import it. And finally add it to combineReducers function. 
// This function takes all reducers and combine them into one. 
// And also tells which reducer is responsible for which data in the store.
// Now when we got reducers module ready we can create a store and attach it to our application.
