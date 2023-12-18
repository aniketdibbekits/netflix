import React, { useEffect } from 'react'
import {  onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO, USER_LOGIN } from '../utils/constants';


const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handlesignout=()=>{
signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/");
}).catch((error) => {
  // An error happened.
});

  };
  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayname} = user.uid;
        dispatch(addUser({uid:uid,email:email,displayname:displayname}));
        // ...
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe will be called when the componen unmounts.
    return()=>unsubscribe();
  },[])
  return (
    <div className=' flex  justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10'>
     <img className='w-44'
     src={NETFLIX_LOGO}
     alt='netflix_logo'/>
     <div className='flex p-2'>
      <img className='w-12 h-12' src={USER_LOGIN}
      alt='user_login'/>
      <button className='text-white' onClick={handlesignout}>Sign Out</button>
     </div>
    </div>
    
  )
}

export default Header
