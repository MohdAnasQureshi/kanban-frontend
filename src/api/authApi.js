import axiosClient from "./axiosClient";

const authApi = {
  signup: (username, password, confirmPassword) =>
    axiosClient.post("auth/signup", { username, password, confirmPassword }),
  login: (username, password) =>
    axiosClient.post("auth/login", { username, password }),
  verifyToken: () => axiosClient.post("auth/verify-token"),
};

export default authApi;
