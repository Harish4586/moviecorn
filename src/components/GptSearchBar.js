import React from 'react'
import lang from "../utils/langConstants"
import { useSelector } from 'react-redux'



const GptSearchBar = () => {
  const currLang= useSelector((store)=>store.config.lang);
  return (
    
       <div className='pt-[10%] flex justify-center '>
       <form  className='bg-black w-[50%] grid grid-flow-col col-span-12 '> 
        {/**mistake hogi hi hogi syntax= lang[currLang].getGptPlaceholder */}
            <input type='text' className='p-4 m-4 col-span-9 rounded' placeholder={lang[currLang].gptInputPlaceholder}/> {/**yha mistake hogi kyuki lang.en.gptInputPlaceholder ke jaise lang.currLang.gptInputPlaceholder likhenege */}
            <button className='py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg' onClick={(e)=>{e.preventDefault()}}> {lang[currLang].search}</button>
        </form>
       
      
    </div>
  )
}

export default GptSearchBar
