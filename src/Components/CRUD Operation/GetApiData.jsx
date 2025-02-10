import { useEffect, useState } from "react";
import { GetMethod } from "./PostApi";
import CardCrud from "./CardCrud"; // Import the Card component
import { PostDataToApi } from "./PostDataToApi";
export const GetApiData = () => {
  const [apiData, setApiData] = useState([]);

  // Fetch API data
  const Getdata = async () => {
    try {
      const response = await GetMethod();
      setApiData(response.data); // Save API data to state
      console.log("Fetched Data: ", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleDelete = (id) => {
    setApiData(apiData.filter((ele) => ele.id !== id));
  };
  useEffect(() => {
    Getdata();
  }, []); // Empty dependency array to call it only once

  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        API Data
      </h1> */}
      <PostDataToApi apiData={apiData} setApiData={setApiData} />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {apiData.map((currele) => (
          <li key={currele.id} className="h-full">
            <CardCrud ApiCardData={currele} onDelete={handleDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetApiData;
