import axios from "../../settings/serviceConfig";

const context = 'members';

const join = (joinInfo) => {
  return axios.post(`${context}`, joinInfo);
}

const fetchList = () => {
  return axios.get(`${context}`);
}

const fetch = (id) => {
  return axios.get(`${context}/${id}`);
}

const modify = (form) => {
  return axios.put(`${context}`, form);
}

const remove = (id) => {
  return axios.delete(`${context}/${id}`);
}

export {
  join,
  fetchList,
  fetch,
  modify,
  remove,
}