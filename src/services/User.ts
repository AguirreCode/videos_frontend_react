import axios from "axios";
import {
  userRegister,
  userLogin,
  Password,
  RecoveryPassword,
} from "../interfaces/User";

const URL = "http://localhost:5000/auth";
const token = localStorage.getItem("token");

export const registerUser = async (user: userRegister) => {
  try {
    const response = await axios.post(`${URL}/signup`, user);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const loginUser = async (user: userLogin) => {
  const response = await fetch(`${URL}/signin`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return await response.json();
};

export const getUser = async () => {
  try {
    const response = await axios.get(`${URL}/user`, {
      headers: {
        "auth-token": `${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const resetPassword = async (email: RecoveryPassword) => {
  try {
    const response = await axios.post(`${URL}/recover-password`, email);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const changePassword = async (password: Password) => {
  const response = await fetch(`${URL}/change-password`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "auth-token": `${token}`,
    },
    body: JSON.stringify(password),
  });
  return await response.json();
};

export const editUser = async (user: userRegister) => {
  const response = await fetch(`${URL}/edit-user`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      "auth-token": `${token}`,
    },
    body: JSON.stringify(user),
  });
  return await response.json();
};
