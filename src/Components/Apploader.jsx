import { Outlet } from "react-router-dom";
import { Movies } from "../assets/Pages/Movies";
import { Footer } from "./Footer";
import { Header } from "./Header";
export const Apploader = () => {
  return (
    <div>
      {/* here we can use the  */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
