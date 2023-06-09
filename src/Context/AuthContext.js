import { useContext, createContext, useEffect, useState } from "react";
import React from "react";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { NovelsData } from "../data";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const novelsList = [];
  const navigate=useNavigate();
  const [coins, setCoin] = useState(5);
  const [user, setUser] = useState({});
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [novelsData, setNovelData] = useState(NovelsData);
  const [addCartItem, setCartItem] = useState([]);
  const [totalCoin, setTotalCoin] = useState(0);
  const [message, setMessage] = useState();

  useEffect(() => {
    if (novelsData.length === 0) {
      setMessage("No results found!!");
    }
  }, [novelsData]);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/main")
        window.localStorage.setItem("novelsList", JSON.stringify(novelsList));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const emailPasswordSignIn = () => {
    signInWithEmailAndPassword(auth, state.email, state.password)
      .then((userCredential) => {
        const newuser = userCredential.user;
        navigate("/main")
        window.localStorage.setItem("novelsList", JSON.stringify(novelsList));
        setUser({
          ...user,
          photoURL:
            "https://tse4.mm.bing.net/th?id=OIP.XKdZgJT9MaVBqYDg-5JlvgAAAA&pid=Api&P=0",
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Oops!!!",
          text: `Wrong Credentials. Please with Google.`,
          icon: "error",
          confirmButtonColor: "#ffa500",
        });
      });

    // createUserWithEmailAndPassword(auth,state.email,state.password)
    // .then((userCredential)=>{
    //   const newUser=userCredential.user;
    //  console.log(newUser)
    // })
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        googleSignIn,
        logOut,
        user,
        setState,
        emailPasswordSignIn,
        coins,
        setCoin,
        setNovelData,
        novelsData,
        state,
        addCartItem,
        setCartItem,
        totalCoin,
        setTotalCoin,
        message,
        setMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
