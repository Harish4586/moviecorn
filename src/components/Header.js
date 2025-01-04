import React, { useEffect } from 'react'
import { LOGO, UserAvatar } from '../utils/constants'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {addUser,removeUser} from "../utils/userSlice";

const Header = () => {
  const user=useSelector((store)=>store.user);
  const dispatch= useDispatch();
  
  const navigate=useNavigate();
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate("/"); //done using onAuthState chged
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
//onauthStateChanged is always called when we signin or sign out
// so no need to redirect from other parts from component
  useEffect(()=>{
     const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email, displayName,photoURL} = user;
        dispatch(addUser({uid:uid, email:email,displayName:displayName,photoURL:photoURL,}));
        navigate("/browse");
        //if the use is logged in then save their details to database and 
        //redirect him to browse page
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
         //if the use is logged out then discard their details from database and 
        //redirect him to login page
      }
    });
    //called when the component unmounts
    return ()=>unsubscribe();
  },[]);
  return (
    <div
     className='absolute w-screen  px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
     <img src={LOGO}
        alt='no img found' className=' w-44 '></img>

{ user && <div className='flex p-2'>
  <img 
  src={UserAvatar}
   alt='userIcon'
    className="w-12 h-12  rounded-lg"/>
  <button 
  onClick={handleSignOut}
  className='bg-red-600 h-12 ml-2 rounded-xl px-2 font-semibold'>sign out</button>
</div>}
    </div>
   
  )
}

export default Header
