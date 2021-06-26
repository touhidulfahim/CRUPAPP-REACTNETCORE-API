import axios from "axios";
const baseUrl = "https://localhost:44388/api/";
export const ENDPOINTS = {
  EMPLOYEE: "Employee",
};
export const createEndPoint = (endPoint) => {
  let url = baseUrl + endPoint + "/";
  return {
    fetchAll: () => axios.get(url),
    fetchById: (id) => axios.get(url + id),
    create: (newRecord) => axios.post(url, newRecord),
    update: (id, updateRecord) => axios.put(url + id, updateRecord),
    delete: (id) => axios.delete(url + id),
  };
};
