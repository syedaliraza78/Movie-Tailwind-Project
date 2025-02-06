import { Outlet } from "react-router-dom";
import { Movies } from "../assets/Pages/Movies";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { useNavigation } from "react-router-dom";
export const Apploader = () => {
  {
    /* here we can use the global loading state*/
  }
  const navigate = useNavigation();
  if (navigate.state === "loading") {
    return (
      <div className="justify-center items-center flex mb-10">
        <button className="bg-red-800 text-black  rounded-lg   mt-10 px-8 py-2 font-bold hover:bg-red-500">
          Loading.....
        </button>
        .
      </div>
    );
  }
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
