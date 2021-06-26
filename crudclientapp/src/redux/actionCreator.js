import { createEndPoint, ENDPOINTS } from "../api/api";
import * as actionTypes from "./actionType";

export const getEmployee = (employee) => {
  return {
    type: actionTypes.READ,
    payload: employee,
  };
};

export const loadingFailed = (errMsg) => ({
  type: actionTypes.READ_FAILED,
  payload: errMsg,
});

export const getEmployeeList = () => {
  return (dispatch) => {
    createEndPoint(ENDPOINTS.EMPLOYEE)
      .fetchAll()
      .then((response) => response.data)
      .then((employee) => dispatch(getEmployee(employee)))
      .catch((err) => dispatch(loadingFailed(err.message)));
  };
};

export const addEmployee = (data, onSuccess) => (dispatch) => {
  createEndPoint(ENDPOINTS.EMPLOYEE)
    .create(data)
    .then((response) => {
      dispatch({
        type: actionTypes.CREATE,
        payload: response.data,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

export const updateEmployee = (id, data, onSuccess) => (dispatch) => {
  createEndPoint(ENDPOINTS.EMPLOYEE)
    .update(id, data)
    .then((response) => {
      dispatch({
        type: actionTypes.UPDATE,
        payload: response.data,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

// export const deleteEmployee=(id, onSuccess)=(dispatch)=>{
//     createEndPoint(ENDPOINTS.EMPLOYEE)
//     .delete(id)
//     .then((response)=>{
//         dispatch({
//             type:actionTypes.DELETE,
//             payload:id,
//         })
//         onSuccess();
//     })
//     .catch((err)=>console.log(err));
// }
