import React, { useEffect } from 'react'
import Header from './Header'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'


const Body = () => {
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
   
  return (
    <>
      
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default Body
