import React, { useEffect } from 'react'
import Header from './Header'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'


const Body = () => {
    const dispatch=useDispatch();
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
    ])
    //logic of api call of onAuthStateChanged 
    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayname} = user.uid;
          dispatch(addUser({uid:uid,email:email,displayname:displayname}));
          // ...
        } else {
          // User is signed out
          // ...
          dispatch(removeUser());
        }
      });
      

    },[])
  return (
    <>
      
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default Body
