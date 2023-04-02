import React from "react";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";

function Cart() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-300">
        <div className="py-12">
          <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl">
            <div className="w-full p-4 px-5 py-5">
              <div className="col-span-2 p-5">
                <h1 className="text-xl font-medium ">Cart</h1>

                <div className="flex justify-between items-center mt-6 pt-6">
                  <div className="flex  items-center">
                    <img
                      src="https://i.imgur.com/EEguU02.jpg"
                      width="60"
                      className="rounded-full "
                    />

                    <div className="flex flex-col ml-3">
                      <span className="md:text-md font-medium">
                        Chicken momo
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-center items-center">
                    <div className="pr-6 cursor-pointer text-red-600">
                      Remove
                    </div>

                    <div className="flex justify-center items-center space-x-2">
                      <span className="text-xl text-green-500">coin:</span>
                      <span className="text-xl pr-6 text-green-500">10</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-6 pt-6">
                  <div className="flex  items-center">
                    <img
                      src="https://i.imgur.com/EEguU02.jpg"
                      width="60"
                      className="rounded-full "
                    />

                    <div className="flex flex-col ml-3">
                      <span className="md:text-md font-medium">
                        Chicken momo
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-center items-center">
                    <div className="pr-6 cursor-pointer text-red-600">
                      Remove
                    </div>

                    <div className="flex justify-center items-center space-x-2">
                      <span className="text-xl text-green-500">coin:</span>
                      <span className="text-xl pr-6 text-green-500">10</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-6 pt-6 border-t">
                  <span className="text-md cursor-pointer  font-medium text-blue-500">
                    Continue Shopping
                  </span>
                  <div className="flex justify-center items-end">
                    <span className="text-sm font-medium text-gray-400 mr-1">
                      Subtotal:
                    </span>
                    <span className="text-lg font-bold text-gray-800 ">{}</span>
                  </div>
                </div>
                <button className="h-12 w-64 bg-blue-500 rounded focus:outline-none text-white hover:bg-blue-600 mt-6">
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
