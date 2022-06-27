import { IUPost } from "../interfaces/Post";
import axios from "axios";

const URL = "http://localhost:5000/post";
const URL2 = "http://localhost:5000/auth";
const token = localStorage.getItem("token");

export const allPost = async () => {
  try {
    const response = await axios.get(`${URL}/get/all`, {
      headers: {
        "auth-token": `${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (post: IUPost) => {
  const response = await fetch(`${URL}/create`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "auth-token": `${token}`,
    },
    body: JSON.stringify(post),
  });
  return await response.json();
};
