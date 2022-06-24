import axios from "axios";
import { IUPost } from "../interfaces/Post";

const URL = "http://localhost:5000/post";
const token = localStorage.getItem("token");

export const allPost = async () => {
  const response = await axios.get(`${URL}/get/all`, {
    headers: {
      "auth-token": `${token}`,
    },
  });
  return response.data;
};

export const createPost = async (post: IUPost) => {
  const response = await fetch(`${URL}/create`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "auth-token": `${token}`
    },
    body: JSON.stringify(post),
  });
  return await response.json();
};
