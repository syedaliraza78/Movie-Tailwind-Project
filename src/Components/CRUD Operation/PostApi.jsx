import axios from "axios";

const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// get data through api
export const GetMethod = () => {
  return API.get("/posts");
};

// delete data in api through using index
export const DeleteMethod = (id) => {
  return API.delete(`/posts/${id}`);
};
