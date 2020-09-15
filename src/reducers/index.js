// This will be entry point for our reducers. 
// We can combine here multiple reducers. 
// In our case we only have one but if the application grows big 
// in the future we’ll need multiple reducers for sure.
import { combineReducers } from "redux";
import data from "./dataReducer";

// This function takes all reducers and combine them into one. 
// And also tells which reducer is responsible for which data in the store.
export default combineReducers({
  data
});