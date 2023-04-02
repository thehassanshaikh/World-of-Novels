import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import SingleCartComponent from "../../Components/SingleCartComponent/SingleCartComponent";
import { UserAuth } from "../../Context/AuthContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Cart() {
  const { addCartItem, totalCoin, coins, setCoin, setTotalCoin, setCartItem } =
    UserAuth();
	const [isVisible,setIsVisible] =useState(true)
	useEffect(()=>{
		if(addCartItem.length>0){
			setIsVisible(false)
		}
		else
		setIsVisible(true)
	},[addCartItem])
  const checkout = () => {
    if (totalCoin <= coins) {
      Swal.fire({
        icon: "success",
        title: "Congatulations",
        text: "Your Novel is booked!",
		confirmButtonColor: '#ffa500',
      });
      setCoin(coins - totalCoin);
	  setCartItem([])
      setTotalCoin(0);
    }
	else{
		Swal.fire({
			title: 'You do not have sufficient Coins',
			text : `Spend another Rs.${(totalCoin-coins)*20} to get this novel!!`,
			showDenyButton: true,
			confirmButtonColor: '#ffa500',
			confirmButtonText: 'Buy',
			denyButtonText: `Cancel`,
		  }).then((result) => {
			if (result.isConfirmed) {
			  Swal.fire(`Your Novel is booked!`, '', 'success')
			  setCartItem([])
			  setTotalCoin(0);
			} else if (result.isDenied) {
			  Swal.fire('OK!!', '', 'info')
			}
		  })
	}
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-300">
        <div className="py-12">
          <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl">
            <div className="w-full p-4 px-5 py-5">
              <div className="col-span-2 p-5">
                <h1 className="text-xl font-medium ">Cart</h1>
                {addCartItem.length > 0 ? (
                  addCartItem.map((item, index) => (
                    <SingleCartComponent
                      item={item}
                      key={index}
                    />
                  ))
                ) : (
                  <h1 className="text-3xl m-7 text-gray-400">
                    Oops!! Nothing in Cart
                  </h1>
                )}

                <div className="flex justify-between items-center mt-6 pt-6 border-t">
                  <Link to="/main">
                    <span className="text-md cursor-pointer  font-medium text-blue-500">
                      Continue Shopping
                    </span>
                  </Link>
                  <div className="flex justify-center items-end">
                    <span className="text-sm font-medium text-gray-400 mr-1">
                      Subtotal:
                    </span>
                    <span className="text-lg font-bold text-gray-800 ">
                      {totalCoin}
                    </span>
                  </div>
                </div>
                <button
                  className="h-12 w-64 bg-orange-400 rounded focus:outline-none text-white hover:bg-orange-500 mt-6"
                  onClick={checkout} disabled={isVisible}> 
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
