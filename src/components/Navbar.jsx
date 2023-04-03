import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
        BingeBox
      </h1>
      <div></div>
      <button className="text-white pr-4">Sign In</button>
      <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
        Sign Up
      </button>
    </div>
  );
};

export default Navbar;
