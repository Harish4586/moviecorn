import React, { useRef } from 'react'
import lang from "../utils/langConstants"
import { useDispatch, useSelector } from 'react-redux'
import { options } from '../utils/constants';
import {addGptSearchedMovies, removeGptSearchedMovies} from "../utils/moviesSlice"



const GptSearchBar = () => {
  const dispatch= useDispatch();
  const currLang= useSelector((store)=>store.config.lang);
  const searchText= useRef(null);
  const handleGptSearch= async()=>{
    // console.log(searchText.current.value); 
    //make an api call to gpt to get movie results
    //but gpt is not working free of cost

    // const gptQuery= "Act as a moive recommendation system and suggest me 5 movies  for the query: "+ searchText.current.value +" and these movie names are comma seperated like example result : example-gadar,sholay,don,marco,golmaal"
    // const gptResults= await openai.chat.completions.create({
    //   messages: [{ role: 'user', content:gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(gptResults.choices);

 


    const query = "https://api.themoviedb.org/3/search/movie?query=" + 
    encodeURIComponent(searchText.current.value) + 
    "&include_adult=false&language=en-US&page=1";
        
    dispatch(removeGptSearchedMovies());
    const result = await fetch(query,options);
    const data=  await result.json();
    // console.log("gpt bar data",data.results);
    if(data.results.length===0){
      alert("movies not found");
    }
    
     dispatch(addGptSearchedMovies(data.results));
    
  }
  return (
    
       <div className='md:pt-[30%] flex justify-center '>
       <form  className=' w-[100%] grid grid-flow-col col-span-12 '
       onSubmit={(e)=>{e.preventDefault()}}> 
        {/**mistake hogi hi hogi syntax= lang[currLang].getGptPlaceholder */}
            <input type='text' 
            ref={searchText}
            className=' p-4 m-4 col-span-9 rounded'
             placeholder={lang[currLang].gptInputPlaceholder}/> {/**yha mistake hogi kyuki lang.en.gptInputPlaceholder ke jaise lang.currLang.gptInputPlaceholder likhenege */}
            <button className='py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg'
            onClick={handleGptSearch} > {lang[currLang].search}</button>
        </form>
       
      
    </div>
  )
}

export default GptSearchBar
