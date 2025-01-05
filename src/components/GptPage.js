import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieContainer from './GptMovieContainer';

const Gpt = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center">
      {/* Background Image */}
      <div
        className="fixed inset-0 h-screen object-cover bg-center -z-10"
        style={{
          backgroundImage:
            "url('https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_small.jpg')",
        }}
      ></div>

      {/* Search Bar */}
      <div className="w-[3/4] md:w-[50%] px-4 pt-[40%] md:pt-0 sm:px-8 lg:px-16 py-4">
        <GptSearchBar />
      </div>

      {/* Movie Container */}
      <div className="w-full px-4 sm:px-8 lg:px-16 py-4">
        <GptMovieContainer />
      </div>
    </div>
  );
};

export default Gpt;
