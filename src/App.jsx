import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./assets/Pages/Home";
import { Contact } from "./assets/Pages/Contact";
import { Movies } from "./assets/Pages/Movies";
import { Thumbnail } from "./Components/thumbnail";
import { Apploader } from "./Components/Apploader";
import { About } from "./assets/Pages/About";
import { Errorhandling } from "./Components/ErrorHandling";
import { Apifetch } from "./assets/Api/MoviesApi";
import { MovieDetail } from "./assets/Api/MovieDetailBtn";
import { Getmoviedetails } from "./assets/Api/Getmoviedetails";
import { GetFormData } from "./assets/Pages/Contact";
import { FetchAxios } from "./assets/Api/FetchdataAxios";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Apploader />,
      errorElement: <Errorhandling />,

      children: [
        {
          path: "/home",
          // element: <Home />,
          element: <FetchAxios />,
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
          element: <About />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Thumbnail />
    </>
  );
};

export default App;
