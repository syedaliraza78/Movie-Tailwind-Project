import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
export const FetchAxios = () => {
  //store the api data into the state
  const [apiData, setApidata] = useState([]);
  // Simple loop chalo map through then get the data from the api
  const getApiData = async () => {
    //use axios to fetch data
    try {
      const Api = await axios.get(
        `http://www.omdbapi.com/?i=tt3896198&apikey=${
          import.meta.env.VITE_API_KEY
        }=titanic&page=1`
      );
      console.log(Api.data.Search);
      setApidata(Api.data.Search);
      console.log(Api.data.Search[0].Title);
      console.log(Api.data.Search[1].Title);
      console.log(Api.data.Search[2].Title);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <>
      <div>Hello Home page</div>
    </>
  );
};
