import axios from "axios";

const API_URL = "http://localhost:5000/auth";

//Register user
const registerUser = async ({ username, password }) => {
  const res = await axios.post(API_URL + "/register", {
    username,
    password,
  });
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

const login = async ({ username, password }) => {
  const res = await axios.post(API_URL + "/login", { username, password });
  if (res.data) {
    const user = res.data;
    localStorage.setItem("user", JSON.parse(JSON.stringify(user)));
  }
  return res.data;
};

const logout = async () => {
  const res = await axios.post(API_URL + "/logout", {});
  if (res) {
    localStorage.removeItem("user");
    console.log(res);
  }
};

const authService = {
  registerUser,
  login,
  logout,
};

export default authService;
