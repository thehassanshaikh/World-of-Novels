import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import SingleCartComponent from "../../Components/SingleCartComponent/SingleCartComponent";
import { UserAuth } from "../../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Cart() {
  const {
    addCartItem,
    totalCoin,
    coins,
    setCoin,
    setTotalCoin,
    setCartItem,
    novelsData,
    setNovelData,
  } = UserAuth();
  const [isVisible, setIsVisible] = useState(true);
  const [extraprice, setExtraPrice] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    if (addCartItem.length > 0) {
      setIsVisible(false);
    } else setIsVisible(true);
  }, [addCartItem]);
  const checkout = () => {
    if (totalCoin <= coins) {
      Swal.fire({
        icon: "success",
        title: "Congatulations",
        text: "Your Novel is booked! You will be notified the futher details in your registered email.",
        confirmButtonColor: "#ffa500",
      });
      addCartItem?.map((item) => {
        novelsData.splice(novelsData.indexOf(item), 1);
        setNovelData([...novelsData]);
      });

      setCoin(coins - totalCoin);
      setCartItem([]);
      setTotalCoin(0);
    } else {
      // let price=0;
      // addCartItem.map((item)=>{
      //   if(item.condition==0){
      //     price+=item.price*10
      //   }
      //   else if(item.condition==1){
      //     price+=item.price*(3/2)*10
      //   }
      //   else{
      //     price+=item.price*3*10
      //   }
      // })
      // console.log(price-(coins*10))

      // you need more ..coins to complete this transaction, spent Rs... for the same
      Swal.fire({
        title: "You do not have sufficient Coins",
        text: `You need ${totalCoin - coins} more coins to complete this transaction, 
        spend Rs. ${parseInt((totalCoin - coins) * 15.5)} for the same!!`,
        showDenyButton: true,
        confirmButtonColor: "#ffa500",
        confirmButtonText: "Buy",
        denyButtonText: `Cancel`,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/checkout");
        } else if (result.isDenied) {
          Swal.fire("OK!!", "", "info");
        }
      });
    }
  };
  //#ffdea1

  return (
    <>
      <NavBar />
      <div className="max-h-screen overflow-y-auto hide-scrollbar">
        <div className="min-h-screen bg-creams">
          <div className="py-12">
            <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl">
              <div className="w-full p-4 px-5 py-5">
                <div className="col-span-2 p-5">
                  <h1 className="text-xl font-medium ">Cart</h1>
                  {addCartItem.length > 0 ? (
                    addCartItem.map((item, index) => (
                      <SingleCartComponent item={item} key={index} />
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
                    onClick={checkout}
                    disabled={isVisible}
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Cart;
