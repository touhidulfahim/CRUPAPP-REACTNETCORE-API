import { AST_Conditional } from "terser";
import * as actionType from "./actionType";

const INITIAL_STATE = {
  employee: [],
};

export const employeeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.READ:
      return {
        ...state,
        employee: [...action.payload],
      };
    case actionType.CREATE:
      return {
        ...state,
        employee: [...state.employee, action.payload],
      };

    case actionType.UPDATE:
      return {
        ...state,
        employee: state.employee.map((x) =>
          x.sysId === action.payload.id ? action.payload : x
        ),
      };

    case actionType.DELETE:
      return {
        ...state,
        employee: state.employee.filter((x) => x.sysId != action.payload),
      };
    default:
      return state;
  }
};
