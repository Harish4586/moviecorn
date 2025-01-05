import React, { useEffect } from "react";
import { LOGO, UserAvatar } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSerachView } from "../utils/gptSlice";
import { SupportedLanguages } from "../utils/langConstants";
import { changeLang } from "../utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const gptSearchBarValue = useSelector((store) => store.gpt.showGptSearchBar);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGptSearchClick = () => {
    //toggle gpt search
    dispatch(toggleGptSerachView());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/"); //done using onAuthState chged
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  //onauthStateChanged is always called when we signin or sign out
  // so no need to redirect from other parts from component
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
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
    return () => unsubscribe();
  }, []);

  const handleLangChange = (e) => {
    dispatch(changeLang(e.target.value))
  };
  return (
    <div className="absolute w-screen  px-8 md:py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img src={LOGO} alt="no img found" className=" mx-auto md:mx-0 w-44 "></img>
      {/**this is for a option that is availabe only after user is logged in */}
      {user && (
        <div className="flex p-2 mt-[1%] md:mt-0 justify-between md:justify-center">
          {/**this is for choosing language */}
          {gptSearchBarValue && (
            <select
              className=" bg-gray-800 h-14 md:h-12 mr-2 rounded-xl
              px-6 text-lg text-white font-semibold"
              onChange={handleLangChange}
            >
              {SupportedLanguages.map((language) => (
                <option key={language.identfier} value={language.identfier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-purple-800 h-14 md:h-12 mr-2 rounded-xl
     px-6 text-lg text-white font-semibold"
            onClick={handleGptSearchClick}
          >
            {gptSearchBarValue ? "Homepage" : "GPT"}
          </button>
          <img
            src={UserAvatar}
            alt="userIcon"
            className=" hidden md:block w-12 md:h-12 rounded-lg"
          />
          <button
            onClick={handleSignOut}
            className="bg-red-600 h-14 md:h-12 ml-2 rounded-xl px-5   md:px-2 text-lg text-white font-semibold"
          >
            sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
