
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./app/route/Home";
import { Contact } from "./app/route/Contact";
import { Movies } from "./app/route/Movies";
// import { Thumbnail } from "./Components/thumbnail";
import { Apploader } from "./Components/error/Apploader";
import { Errorhandling } from ".././src/Components/error/ErrorHandling";
import { Apifetch } from "../src/Api/MoviesApi";
import { MovieDetail } from "./Components/ui/MovieDetailBtn";
import { Getmoviedetails } from "./Api/Getmoviedetails";
import { GetFormData } from "../src/app/route/Contact";
import { FetchAxios } from ".//Api/FetchdataAxios";
import { GetApiData } from "../src/CRUD Operation/GetApiData";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Apploader />,
      errorElement: <Errorhandling />,

      children: [
        {
          path: "/home",
          element: <Home />,
          // element: <FetchAxios />,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: GetFormData,
        },
        {
          path: "/movies",
          element: <Movies />,
          loader: Apifetch,
        },
        {
          path: "/movies/:movieid", // id details
          element: <MovieDetail />, // shows the id details
          loader: Getmoviedetails, //get specific id movie details
        },
        {
          path: "/about",
          element: <GetApiData />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      {/* <Thumbnail /> */}
     
    </>
  );
};

export default App;
