import React from 'react'
import {  signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';


const Header = () => {
  const navigate=useNavigate();
  const handlesignout=()=>{
signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/");
}).catch((error) => {
  // An error happened.
});
  }
  return (
    <div className=' flex  justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10'>
     <img className='w-44'
     src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
     alt='netflix_logo'/>
     <div className='flex p-2'>
      <img className='w-12 h-12' src='https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229'
      alt='user_login'/>
      <button onClick={handlesignout}>Sign Out</button>
     </div>
    </div>
    
  )
}

export default Header