import axios from "axios";
import { userRegister, userLogin, Password } from "../interfaces/User";

const URL = "http://localhost:5000/auth";
const token = localStorage.getItem("token");

export const registerUser = async (user: userRegister) => {
  const response = await axios.post(`${URL}/signup`, user);
  return response.data;
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
  const response = await fetch(`${URL}/user`, {
    headers: {
      "auth-token": `${token}`,
    },
  });
  return await response.json();
};

export const reseatPassword = async (email: string) => {
  const response = await fetch(`${URL}/reseat-password`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(email),
  });
  return await response.json();
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
  console.log(user);
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
