import axios from "../../utils/axios";

export const login = (form) => {
  return {
    type: "login",
    payload: axios.post(`auth/login`, form),
  };
};
