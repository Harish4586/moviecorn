import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { photoURL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const navigate= useNavigate();

  const toggleSignInForm = () => setisSignInForm(!isSignInForm);

  const handleButtonClick = (event) => {
    event.preventDefault();

    // Safely access ref values
    const emailValue = email.current?.value;
    const passwordValue = password.current?.value;
    const fullNameValue = !isSignInForm && fullName.current?.value;
    const retmsg = checkValidData(emailValue, passwordValue, fullNameValue);
    seterrorMessage(retmsg)
    if(retmsg!==null) return;
    //signin signup logic
    if(!isSignInForm){
      //sign up logic

    createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value)
        .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: fullNameValue, photoURL: {photoURL}
        }).then(() => {
          // Profile updated!
          // navigate("/browse"); //we are redirecting using on auth state change
        }).catch((error) => {
          // An error occurred
          seterrorMessage(error.message);
        });
      })
      .catch((error) => {
        
       seterrorMessage(error.code+" : "+error.message)
      });

     

    }
    else{
      //sign in logic
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // console.log(user);
    // navigate("/browse"); //used onAuthStateChanged for redirecting
   
  })
  .catch((error) => {
    // seterrorMessage(error.code+" : "+ error.message);
    seterrorMessage(" Oops! User not found..");
  });
    }

  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage:
            "url('https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_small.jpg')",
        }}
      ></div>

      <div className="relative w-full max-w-md bg-black mx-auto my-16 p-8 bg-opacity-80 rounded">
        <h1 className="text-white font-extrabold text-3xl mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <form className="text-white">
          {!isSignInForm && (
            <input
              ref={fullName}
              type="text"
              placeholder="Enter Full Name"
              className="p-3 mb-4 rounded w-full text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Enter Email Address"
            className="p-3 mb-4 rounded w-full text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            ref={password}
            type="password"
            placeholder="Enter Password"
            className="p-3 mb-4 rounded w-full text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <p className="font-bold text-red-600 mb-4">{errorMessage}</p>
          <button
            className="p-3 mb-4 text-xl bg-red-600 w-full font-bold rounded"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="text-white text-xl w-full font-bold text-center cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already have an account? Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
