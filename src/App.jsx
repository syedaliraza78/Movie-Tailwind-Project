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
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/movies",
          element: <Movies />,
          loader: Apifetch,
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
