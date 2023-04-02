import React, { useEffect, useState } from 'react'
import { UserAuth } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
import img1 from "../../images/img1.jpg"
import img2 from "../../images/image2.jpg"
// import mintbackground from './mintBackground.jpg'

function Login() {
  const navigate=useNavigate();
  const {googleSignIn,user,setState,emailPasswordSignIn,state} = UserAuth();
  const [email,setEmail] =useState('');
  const [password,setPassword]=useState('');
  const [passwordShown, setPasswordShown] = useState(false);

  const handleSubmit = async(e) =>{
    e.preventDefault()
    setState({
      email:email,
      password:password,
    })
    //emailPasswordSignIn();
  }
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  useEffect(()=>{
    if(state.email!=='' && state.password!=='')
    emailPasswordSignIn();
  },[state])
  
  const signin = async()=>{
    await googleSignIn();
  }

  useEffect(()=>{
    if(user){
      navigate('/main')
    }
  },[user])
  return (
    <div>
      <section className='min-h-screen flex items-center justify-center' style={{ backgroundImage: `url(${img1})` }}>
        {/* ------------------------------------------------------login container------------------------------------------------------- */}
        <div className="bg-[#fcc1bd] flex rounded-2xl shadow-2xl  max-w-3xl p-3"> 
        

        {/* ----------------------------------------------------image---------------------------------------------------------------------- */}
        <div className='sm:block hidden w-1/2 p-5 mt-16 pr-16 bg-[#fcc1bd]'>
            <img src={img2} alt="" className="rounded-2xl w-auto h-auto"></img>
        </div>
        
         {/* --------------------------------form---------------------------------------------------------------------*/}
        <div className='sm:w-1/2 px-16 py-4 rounded-2xl bg-[#b0d9d3]'>
         <h2 className='font-bold text-2xl text-[#0B1354]'>Login</h2>
         <p className='text-sm mt-4 text-[#0B1354]'>
          log in your Account
         </p>
         <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <input className='p-2 mt-8 rounded-xl border' type="text" name='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}></input>
          <div className='relative'>
            <input className='p-2 rounded-xl border w-full' type={passwordShown ? "text" : "password"} name='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}></input>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer" viewBox="0 0 16 16" onClick={togglePassword}>
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
            </svg>
          </div>

          <input type='submit' value='Login' className='bg-[#0B1354] rounded-xl py-2 text-white cursor-pointer hover:bg-[#165BAA]'/>

         </form>
         <div className='w-full flex items-center justify-center relative py-6'>
          <div className='w-full h-[1px] bg-[#0B1354]'></div>
          <p className='text-lg absolute text[#0B1354] bg-[#b0d9d3] px-1'>or</p>
         </div>


         <button onClick={signin} className="bg-white border py-2 w-full rounded-xl mt-2 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#0B1354]">

        <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
          <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
          <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
          <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
          <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
        </svg>
        Login with Google
      </button>
        </div>         
        </div>
      </section>
    </div>
  )
}

export default Login
