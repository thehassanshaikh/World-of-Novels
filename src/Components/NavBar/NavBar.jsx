import React, { useEffect, useState } from "react";
import logo1 from "./pic/logo1.png";
import searchicon from "./pic/searchicon.svg";
import coin from "./pic/coins.png";
import usericon from "./pic/usericon.svg";
import cart from "./pic/cart.svg";
import { useNavigate } from "react-router";
import { UserAuth } from "../../Context/AuthContext";


function NavBar() {
  const options = [];
  const {logOut,user,coins} = UserAuth();
  const navigate =useNavigate();
  const [url,setUrl]=useState(usericon)

  const uploadBooks = () =>{
    navigate('/bookRegistrationPage')
  }

  useEffect(()=>{
    if(user)
    {
      setUrl(user.photoURL)
    }
  },[user])

  const handleLogin = () =>{
    console.log("hii")
    logOut()
    navigate('/')
  }
  return (
    <div className="navBar flex justify-between items-center bg-[#fcc1bd] shadow-lg p-4">
      <div className="flex justify-center items-center md:order-2">
        <div className="hamburger inline-block p-4 cursor-pointer md:hidden">
          <div className="line h-0.5 w-6 my-1 bg-white "></div>
          <div className="line h-0.5 w-6 my-1 bg-white "></div>
          <div className="line h-0.5 w-6 my-1 bg-white "></div>
        </div>
        <div className="search md:hidden w-4 mr-4 cursor-pointer">
          <img src={searchicon} alt=""></img>
        </div>
      </div>

      <div className="logo text-center flex md:order-1">
        <div className="cursor-pointer">
          <img className="w-48" src={logo1} alt=""></img>
        </div>
        <div className="sell w-fit md:w-auto md:px-8 md:m-3 md:p-0.5 text-white md:font-bold md:text-xl md:border absolute md:items-center md:bg-[#0b1354] md:rounded-xl hover:scale-105  md:static bg-[#0b1354] inset-0 md:flex md:mx-4 md:space-x-2 -translate-x-96 md:translate-x-0 cursor-pointer">
          <button className="SItem " onClick={uploadBooks}>Upload +</button>
        </div>
      </div>
      <div className="w-fit mt-4 md:order-2 hidden md:block">
        <div className="mb-3 xl:w-96">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              type="search"
              className="relative m-0 block w-[2%] min-w-0 flex-auto rounded border border-solid border-white bg-[#0b1354] bg-clip-padding px-3 py-1.5 text-base font-normal text-white outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-white focus:shadow-te-primary focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <span
              className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal bg-[#0b1354] text-white cursor-pointer"
              id="basic-addon2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="cart text-center md:order-3 flex inset-12">
        
        <img className="w-6 h-6 mr-1 cursor-pointer" src={coin} alt=""></img><p className="text-teal-500">{coins}</p>
        <img
          className="w-6 h-6 ml-4 mr-4 cursor-pointer text-white"
          src={cart}
          alt=""
        ></img>
        <img
          className="w-7 h-7 mr-4 cursor-pointer text-white  object-cover rounded-full"
          src={url} 
          alt=""
        ></img>
        <button onClick={handleLogin} className='text-blue-500 underline'>Logout</button>
      </div>
    </div>
  );
}

export default NavBar;
