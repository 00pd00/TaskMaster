import React from "react";
import Icons from "./Icons";

const Header = () => {
  return (
    <header className="bg-gray-200 text-black py-4 px-6 rounded-b-lg shadow-md">
      <h1 className="  text-3xl font-bold text-center">TaskMaster</h1>
      <p className="text-lg text-center mt-2">
        Stay organized. Stay productive.
      </p>
      <Icons />
    </header>
  );
};

export default Header;
