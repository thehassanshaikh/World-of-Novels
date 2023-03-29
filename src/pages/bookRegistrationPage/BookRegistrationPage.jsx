import React, { useState } from "react";
import img3 from "../../images/img3.jpg";

function BookRegistrationPage() {
  const [novel, setNovel] = useState({
    title: "",
    author: "",
    price: "",
    category: "",
    condition: "",
    image: "",
    subcategory: [],
    star: "",
  });

  const options = ["Fiction", "NonFiction"];
  const optionsCondition = ["Good", "Average", "Bad/Some Pages missing"];

  const uploadNovel = (e) => {
    e.preventDefault();
    console.log(novel);

    let novelsList = JSON.parse(window.localStorage.getItem("novelsList"));
    ///  console.log(novelsList)
    novelsList.push(novel);
    window.localStorage.setItem("novelsList", JSON.stringify(novelsList));
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
              <form action="#">
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
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <select
                    className="block w-full py-2 mb-4 text-sm text-[#00372e] border border-[#0B1354]"
                    onChange={(e) => {
                      setNovel({
                        ...novel,
                        category: e.target.value,
                      });
                    }}
                  >
                    <option>Select Book Category</option>
                    {options.map((option, index) => {
                      return (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    onChange={(e) => {
                      setNovel({
                        ...novel,
                        condition: e.target.value,
                      });
                    }}
                    className="block w-full py-2 mb-4 text-sm text-[#0B1354] border border-[#0B1354]"
                  >
                    <option>Select Book Condition</option>
                    {optionsCondition.map((option, index) => {
                      return (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      );
                    })}
                  </select>
                </div>
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
                  <button
                    className="w-full bg-[#0B1354] py-3 text-center text-white"
                    onClick={uploadNovel}
                  >
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
