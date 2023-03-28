import { useContext, createContext, useEffect, useState } from "react";
import React from "react";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => {
  
  const [user,setUser] = useState({})
  const [state,setState] =useState({
    email:"",
    password:"",
  });
  
  useEffect(()=>{
  console.log(state)
  },[state])

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user)
    }).catch((error) => {
      console.log(error);
    });
  
  };

  const emailPasswordSignIn=()=>{
    signInWithEmailAndPassword(auth,state.email,state.password).then((userCredential) => {
      const newuser = userCredential.user;
      console.log(newuser)
    })
    .catch((error) => {
     console.log(error)
    });
  
    // createUserWithEmailAndPassword(auth,state.email,state.password)
    // .then((userCredential)=>{
    //   const newUser=userCredential.user;
    //  console.log(newUser)
    // })
  }

  const logOut = () =>{
    signOut(auth)
  }

  useEffect(()=>{
    const unsubscribe =onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
    })
    return ()=>{
      unsubscribe()
    }
  },[])

  return (
    <AuthContext.Provider value={{ googleSignIn,logOut,user,setState,emailPasswordSignIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
