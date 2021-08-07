import axios from "./apiconnects";

export const login = (data) => {
  return axios.post("/login", data);
};
export const register = (data) => {
  return axios.post("/register", data);
};

export const forgotPassword = (email) => {
  return axios.post("/forgot", { email });
};

export const passReset = (reset, password) => {
  return axios.put(`/reset/${reset}`, { password });
};
