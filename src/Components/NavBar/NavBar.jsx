import React, { useEffect, useState, useMemo } from "react";
import logo1 from "./pic/logo1.jpeg";
import searchicon from "./pic/searchicon.svg";
import coin from "./pic/coins.png";
import usericon from "./pic/usericon.svg";
import cart from "./pic/cart.svg";
import { useNavigate } from "react-router";
import { UserAuth } from "../../Context/AuthContext";
import { NovelsData } from "../../data";
import { Link } from "react-router-dom";
import logo from "./pic/wonlogo-1.png";


function NavBar() {
  const { logOut, user, coins, setNovelData, setState,addCartItem } = UserAuth();
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  const [url, setUrl] = useState(usericon);
  const [mainpage,setMainPage] = useState(false)

  const uploadBooks = () => {
    navigate("/bookRegistrationPage");
  };

  useEffect(()=>{
    console.log(window.location.pathname)
    if(window.location.pathname === '/main'){
      setMainPage(true)
    }
  },[window.location.pathname])

  useEffect(() => {
    if (user) {
      setUrl(user.photoURL);
    } else {
      navigate("/");
      setState({
        email: "",
        password: "",
      });
    }
  }, [user]);

  useEffect(() => {
    //const timerId = setInterval(serachData, 1000);
    //return () => clearInterval(timerId);
    searchData();
  }, [q]);

  const searchData = () => {
    const searchResult = NovelsData.filter(
      (novel) =>
        novel.title.toLowerCase().includes(q.toLowerCase()) ||
        novel.author.toLowerCase().includes(q.toLowerCase())
    );
    setNovelData(searchResult);
  };

  // useEffect(() => {
  //   const searchResult = NovelsData.filter(
  //     (novel) =>
  //       novel.title.toLowerCase().includes(q.toLowerCase()) ||
  //       novel.author.toLowerCase().includes(q.toLowerCase())
  //   );
  //   setNovelData(searchResult);
  // }, [q]);

  // const searchFilter = () => {
  //   const searchResult = NovelsData.filter(
  //     (novel) =>
  //       novel.title.toLowerCase().includes(q.toLowerCase()) ||
  //       novel.author.toLowerCase().includes(q.toLowerCase())
  //   );
  //   setNovelData(searchResult);
  // };

  const handleLogin = async () => {
    await logOut();
  };
  return (
    <div className="navBar flex justify-between items-center bg-white shadow-2xl px-4">
      {/* <div className="flex justify-center items-center md:order-2">
        <div className="hamburger inline-block p-4 cursor-pointer md:hidden">
          <div className="line h-0.5 w-6 my-1 bg-orange-500 "></div>
          <div className="line h-0.5 w-6 my-1 bg-orange-500 "></div>
          <div className="line h-0.5 w-6 my-1 bg-orange-500 "></div>
        </div>
        <div className="search md:hidden w-4 mr-4 cursor-pointer">
          <img src={searchicon} alt=""></img>
        </div>
      </div> */}

      <div className="logo text-center flex md:order-1">
        <div className="cursor-pointer md:w-48 w-20">
          <Link to='/main'><img className="" src={logo} alt=""></img></Link>
        </div>
       < div className="sell hidden md:block w-auto px-8 m-3 py-0.5 text-white font-bold text-xl border items-center rounded-xl hover:scale-105 bg-[#ffa500] cursor-pointer">
          <button className="SItem " onClick={uploadBooks}>Upload+</button>
        </div>
        < div className="sell md:hidden w-auto px-4 m-3 py-0.5 text-white font-bold text-xl border items-center rounded-xl hover:scale-105 bg-[#ffa500] cursor-pointer">
          <button className="SItem " onClick={uploadBooks}>+</button>
        </div>
        {
          mainpage && <div className="w-fit mt-4 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="black"
              className="h-7 w-6 ml-1"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        }
      </div>
      {mainpage && <div className="w-fit hidden md:block mt-4 md:order-2">
        <div className="mb-3 xl:w-96">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              type="search"
              className="relative m-0 block w-[2%] min-w-0 flex-auto rounded border border-solid border-white bg-gray-300 bg-clip-padding px-3 py-1.5 text-base font-normal text-black outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-black focus:shadow-te-primary focus:outline-none"
              placeholder={`Search`}
              aria-label="Search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              aria-describedby="button-addon2"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="black"
              className="h-7 w-6 mt-1 ml-1"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>}

      <div className="cart text-center md:order-3 flex inset-12">

        <img className="w-6 h-6 mr-1 cursor-pointer" src={coin} alt=""></img><p className="text-black">{coins}</p>
        <Link to={'/cart'}><img
          className="w-6 h-6 ml-4 mr-1 cursor-pointer text-white"
          src={cart}
          alt=""
        ></img></Link>
        {addCartItem.length!==0 && <p className="text-xs bg-slate-300 w-4 h-4 rounded-full">{addCartItem.length}</p>}
        <img
          className="w-7 h-7 ml-4 mr-4 cursor-pointer text-white  object-cover rounded-full"
          src={url}
          alt=""
        ></img>
        <button onClick={handleLogin} className='text-black underline'>Logout</button>
      </div>
    </div>
  );
}

export default NavBar;