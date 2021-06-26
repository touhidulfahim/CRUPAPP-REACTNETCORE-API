import { combineReducers } from "redux";
import { employeeReducer } from "./reducer";

export const root = combineReducers({
  employeeReducer,
});
