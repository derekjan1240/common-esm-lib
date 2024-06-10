import axios from "axios";
import type { Post } from "../types";

const helloWorld = (): string => {
  return "Hello World!";
};

const getPosts = (): Promise<Post[]> => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

const getPost = (id: number): Promise<Post> => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { helloWorld, getPosts, getPost };
