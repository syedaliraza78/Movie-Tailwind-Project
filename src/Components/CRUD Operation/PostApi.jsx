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

// add data into the api using form
export const PostData = (postdata) => {
  return API.post("/posts", postdata);
};
