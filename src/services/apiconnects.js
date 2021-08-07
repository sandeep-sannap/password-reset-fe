import axios from "axios";

export default axios.create({
  baseURL: "https://password-reset-be.herokuapp.com/api/auth",

  headers: { "Content-Type": "application/json" },
});
