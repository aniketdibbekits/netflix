import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValidData} from '../utils/Validate';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isSignInForm,setisSignInForm]=useState(true);
  const [errormessage,seterrormessage]=useState("");
  const navigate=useNavigate();
  const email=useRef(null);
  const password=useRef(null);
  const handleButtonClick=()=>{
    //validate the form data
    const message=checkValidData(email.current.value,password.current.value);
    seterrormessage(message);
    if(message) return;
    if(!isSignInForm){
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    navigate("/browse");

    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+" "+ errorMessage)
    // ..
  });


      //sign up 
    }
    else{
      //sign in logic
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate("/browse");

    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+" "+errorMessage);
  });

    }
  }
  const handlesignin=()=>{
    setisSignInForm(!isSignInForm)

  }
  return (
    <div>
      <Header/>
      <div>
      <img className='absolute' src='https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
      alt='logo'/>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className=' w-3/12 p-12 absolute bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1
         className='font-bold text-3xl py-4'>
          {isSignInForm? "Sign In":"Sign Up"}
          </h1>
        { !isSignInForm && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>}
        <input
          ref={email}
           type='text'
            placeholder='Email Address'
             className='p-4 my-4 w-full bg-gray-700'
             />
        <input
         ref={password} 
         type='password'
          placeholder='Password' 
          className='p-4 my-4 w-full bg-gray-700'
          />
        <p className='text-red-500'>{errormessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full' onClick={handleButtonClick}>{isSignInForm ? "Sign In": "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={handlesignin}>{isSignInForm ? "New to Netflix? Sign Up now": "Already a user Sign in now"}</p>
      </form>
    </div>
  )
}

export default Login
