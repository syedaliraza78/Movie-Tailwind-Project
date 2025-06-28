/** @format */

import { useState } from "react";

const ForgotPassword = () => {
  const [input, Setinput] = useState({
    phone: "",
  });
  const HandleInput = (e) => {
    const { value, name } = e.target;
    Setinput({ ...input, [name]: value });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <>
      <h1 className="space-y-4 ml-16 font-extrabold text-2xl mb-5 ">
        Forgot Password
      </h1>
      <form
        onSubmit={HandleSubmit}
        className="flex flex-col gap-5 md:p-8 w-full max-w-md rounded-lg mx-4">
        <input
          type="number"
          placeholder="Enter Phone Number"
          name="phone"
          value={input.phone}
          onChange={HandleInput}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default ForgotPassword;
