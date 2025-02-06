import { Contact } from "../assets/Pages/Contact";
import { NavLink } from "react-router-dom";
import { ActiveLink } from "./Activelink";
export const Header = () => {
  return (
    <div>
      <body class="bg-gray-100">
        {/* <header class="bg-white shadow-md  fixed top-0 left-0 w-full"> */}
        {/* <!-- Header --> */}
        <header class="bg-white shadow-md ">
          <div class="container mx-auto px-4 py-3 flex justify-between items-center">
            {/* <!-- Logo --> */}
            <a href="/home" class="text-2xl font-bold text-blue-600">
              MyLogo
            </a>

            {/* <!-- Navigation Links (Hidden on small screens) --> */}
            <nav class="hidden md:flex space-x-6">
              <NavLink to="home" class="text-gray-700 hover:text-blue-700">
                Home
              </NavLink>
              <NavLink
                to="about"
                class="text-gray-700 hover:text-blue-700"
                style={ActiveLink}
              >
                About
              </NavLink>
              <NavLink
                to="movies"
                class="text-gray-700 hover:text-blue-700"
                style={ActiveLink}
              >
                Movies
              </NavLink>
              <NavLink
                to="Contact"
                class="text-gray-700 hover:text-blue-700"
                style={ActiveLink}
              >
                Contact
              </NavLink>
            </nav>

            {/* <!-- Button --> */}
            <NavLink
              to="movies"
              class="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Get Started
            </NavLink>

            {/* <!-- Mobile Menu Button --> */}
            <button class="md:hidden text-gray-700 focus:outline-none">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </header>
      </body>
    </div>
  );
};
