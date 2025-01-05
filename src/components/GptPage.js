import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieContainer from './GptMovieContainer'

const Gpt = () => {
  return (
    <div>
       <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage:
            "url('https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_small.jpg')",
        }}></div>
      <GptSearchBar/>
      <GptMovieContainer/>
    </div>
  )
}

export default Gpt
