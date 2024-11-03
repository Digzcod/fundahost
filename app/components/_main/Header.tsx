"use client";
import React, { useState } from "react";
import {
  FaBars,
} from "react-icons/fa";
import {
  BsFillHousesFill,
  BsSearch,
  BsBell,
  BsChevronDown,
} from "react-icons/bs";

const Header = () => {
  const [notifications] = useState(3);

  return (
    <article className="w-full px-[2rem] py-4 border border-b-slate-100 flex items-center ">
     
      <div className="flex items-center gap-2">
        <BsFillHousesFill className="text-violet-800 text-4xl cursor-pointer hover:text-indigo-600" />
        <h1 className="text-xl text-gray-700 font-semibold">FindaHost</h1>
      </div>

    
      <section className="hidden ml-[8rem] md:flex items-center border border-gray-200 rounded-full px-4 py-2 bg-white  w-[40vw]">
        <BsSearch className="text-gray-300 mr-2" />
        <input
          type="text"
          placeholder="Search here..."
          className="outline-none  text-gray-500"
        />
      </section>

   
      <div className="ml-auto md:hidden">
        <FaBars className="text-gray-500 text-2xl cursor-pointer" />
      </div>

    
      <div className="hidden md:flex md:ml-auto items-center gap-4">
    
        <section className="relative">
          <div className="p-2 rounded-full border border-gray-200">
            <BsBell className="text-gray-400 text-[1rem] cursor-pointer hover:text-indigo-600" />
            {notifications > 0 && (
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-violet-500"></span>
            )}
          </div>
        </section>

      
        <section className="flex items-center p-1 px-2 rounded-full border border-gray-200">
          <div className="w-[1.5rem] mr-2 rounded-full overflow-hidden">
            <img
              className="w-full object-cover"
              src="https://avatars.githubusercontent.com/u/97958691?v=4"
              alt="fundahost founder"
            />
          </div>
          <BsChevronDown className="text-gray-400 text-lg cursor-pointer hover:text-indigo-600" />
        </section>
      </div>
    </article>
  );
};

export default Header;
