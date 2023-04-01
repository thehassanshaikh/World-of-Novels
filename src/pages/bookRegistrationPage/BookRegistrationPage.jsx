import React, { useState } from "react";
import img3 from "../../images/img3.jpg";
import { fiction } from "../../data";
import { nonFiction } from "../../data";
import { NovelsData } from "../../data";
import { useNavigate } from "react-router";
import { UserAuth } from "../../Context/AuthContext";

import Swal from "sweetalert2";
import Select from "react-select";

const initialState = {
  title: "",
  author: "",
  price: "",
  category: "",
  condition: "",
  image: "",
  description: "",
  shortDescription: "",
  subcategory: [],
  coin: 0,
};

function BookRegistrationPage() {
  const [novel, setNovel] = useState(initialState);
  const navigate = useNavigate();
  const { setCoin } = UserAuth();
  const options = ["Fiction", "NonFiction"];
  const optionsCondition = ["Good", "Average", "Bad/Some Pages missing"];
  const [error, setError] = useState({
    title: "",
    author: "",
    price: "",
    category: "",
    condition: "",
    image: "",
    description: "",
  });

  const validateInput = (formObject) => {
    const errors = {};
    console.log(novel);
    Object.keys(formObject).forEach((val) => {
      if (val!='shortDescription' && formObject[val] === "") {
        errors[val] = "Please fill this field";
      }
    });
    if (formObject.price < 0) {
      errors.price = "Price cannot be negative";
    }
    return errors;
  };

  const uploadNovel = (e) => {
    e.preventDefault();
    
    setError({});
    let coin = parseInt(novel.price) / 10;
    if (novel.condition == 1) {
      coin = (coin * 2) / 3;
    } else if (novel.condition == 2) {
      coin = coin / 3;
    }
    setNovel({
      ...novel,
      coin: parseInt(coin),
    });

    const errors = validateInput(novel);
    if (Object.keys(errors).length > 0) {
      setError(errors);
      // Swal.fire({
      //   title: "Some fields are empty",
      //   text: `Please fill it first`,
      //   icon: "error",
      // });
    } else {
      NovelsData.unshift({
        ...novel,
        coin: parseInt(coin),
        subcategory:selectedOptions,
      });
      e.target.reset();

      setCoin((prevValue) => prevValue + parseInt(coin));
      navigate("/main");
      Swal.fire({
        title: "Congratulations!!!",
        text: `You earned ${parseInt(coin)} coins`,
        icon: "success",
      });
      console.log(novel)
      setNovel(initialState);
    }

    //Setting the data to Local Storage
    // let novelsList = JSON.parse(window.localStorage.getItem("novelsList"));
    // novelsList.push(novel);
    // window.localStorage.setItem("novelsList", JSON.stringify(novelsList));
  };

  const [categoryselect, setCategory] = useState(fiction);
  const [selectedOptions, setSelectedOptions] = useState(null);

  const setHandle = (e) => {
    setSelectedOptions(Array.isArray(e) ? e.map((item) => item.subcategory) : []);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-red-200 via-emerald-200 to-teal-200">
        <div className="container p-10">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-[#d1fbed] rounded-2xl mx-auto shadow-lg overflow-hidden">
            <div
              className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
              style={{
                backgroundImage: `url(${img3})`,
              }}
            >
              <h1 className="text-[#0B1354] text-3xl mb-3">Welcome</h1>
              <div>
                <p className="text-[#0B1354] text-xl">
                  "Remember: A best-selling book usually follows a simple rule,
                  It's a wonderful story, wonderfully told; not, It's a
                  wonderfully told story."
                  <span className="text-[#ffc000] font-semibold">
                    ~ Nicholas Sparks
                  </span>
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 py-16 px-12">
              <h2 className="text-3xl mb-4 text-[#0B1354]">
                Register Your Book
              </h2>
              <p className="mb-4 text-[#0B1354]">
                Register your Novel. It’s free and only take a minute
              </p>
              <form action="#" onSubmit={uploadNovel}>
                <div className="mt-5">
                  <input
                    type="text"
                    placeholder="Title"
                    onChange={(e) => {
                      setNovel({
                        ...novel,
                        title: e.target.value,
                      });
                    }}
                    className="border border-[#0B1354] py-1 px-2 w-full"
                  />
                  {error.title ? (
                    <p className="text-xs text-red-600">{error.title}</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mt-5">
                  <input
                    type="text"
                    placeholder="Author Name"
                    onChange={(e) => {
                      setNovel({
                        ...novel,
                        author: e.target.value,
                      });
                    }}
                    className="border border-[#0B1354] py-1 px-2 w-full"
                  />
                  {error.author ? (
                    <p className="text-xs text-red-600">{error.author}</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <input
                    type="number"
                    placeholder="MRP in Rs"
                    onChange={(e) => {
                      setNovel({
                        ...novel,
                        price: e.target.value,
                      });
                    }}
                    className="border border-[#0B1354] py-1 px-2"
                  />

                  {error.price ? (
                    <p className="text-xs text-red-600">{error.price}</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <select
                    onChange={(e) => {
                      setNovel({
                        ...novel,
                        condition: e.target.value,
                      });
                    }}
                    className="block w-full py-1 px-2 text-sm text-[#0B1354] border border-[#0B1354]"
                  >
                    <option>Select Book Condition</option>
                    {optionsCondition.map((option, index) => {
                      return (
                        <option key={index} value={index}>
                          {option}
                        </option>
                      );
                    })}
                  </select>

                  {error.condition ? (
                    <p className="text-xs text-red-600">{error.condition}</p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="grid grid-cols-2 gap-5 mt-5">
                  <select
                    className="block w-full py-2 mb-4 text-sm text-[#00372e] border border-[#0B1354]"
                    onChange={(e) => {
                      setNovel({
                        ...novel,
                        category: e.target.value,
                      });
                      e.target.value === "Fiction"
                        ? setCategory(fiction)
                        : setCategory(nonFiction);
                      console.log(e.target.value);
                    }}
                  >
                    <option>Select Book Category</option>
                    {options.map((item, index) => {
                      return (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>

                  {error.category ? (
                    <p className="text-xs text-red-600">{error.category}</p>
                  ) : (
                    ""
                  )}

                  
                  <Select
                    options={categoryselect}
                    onChange={setHandle}
                    isMulti
                    className="block  text-sm text-[#00372e]"
                  ></Select>
               
               </div>
             

                <textarea
                  rows="1"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Short Description(optional)"
                  onChange={(e) =>
                    setNovel({
                      ...novel,
                      shortDescription: e.target.value,
                    })
                  }
                ></textarea>

                <textarea
                  rows="2"
                  className="block p-2.5 mt-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Description"
                  onChange={(e) =>
                    setNovel({
                      ...novel,
                      description: e.target.value,
                    })
                  }
                ></textarea>
                {error.description ? (
                  <p className="text-xs text-red-600">{error.description}</p>
                ) : (
                  ""
                )}

                <div className="mt-5">
                  <label
                    className="block mb-2 text-sm font-medium text-[#00372e] dark:text-white"
                    htmlFor="file_input"
                  >
                    Upload Picture
                  </label>
                  <input
                    className="block w-full text-sm text-[#00372e] border border-[#00372e] cursor-pointer bg-gray-50 focus:outline-none py-1 px-2"
                    id="file_input"
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={(e) => {
                      setNovel({
                        ...novel,
                        image: e.target.value,
                      });
                    }}
                  />
                  {error.image ? (
                    <p className="text-xs text-red-700">{error.image}</p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="mt-5">
                  <input type="checkbox" className="border border-[#0B1354]" />
                  <span className="text-[#0B1354]">
                    I accept the{" "}
                    <a href="#" className="text-[#ffc000] font-semibold">
                      Terms of Use
                    </a>{" "}
                    &{" "}
                    <a href="#" className="text-[#ffc000] font-semibold">
                      Privacy Policy
                    </a>
                  </span>
                </div>
                <div className="mt-5">
                  <button className="w-full bg-[#0B1354] py-3 text-center text-white">
                    Register Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookRegistrationPage;
