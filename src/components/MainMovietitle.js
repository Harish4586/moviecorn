import React from 'react'

const MainMovietitle = ({title,overview}) => {
    return (
      <div className=' pt-[3%] md:pt-[25%] px-5 md:px-16 w-screen aspect-video absolute text-gray-400 md:text-white bg-gradient-to-r from-black'>
          <h1 className=' font-bold md:text-4xl md:font-semibold'>{title}</h1>
          <p className='md:py-6 text-sm md:text-lg w-[50%] md:w-[40%]'>{overview}</p>
          <div className='p-10'>
              <button className='  mr-3 px-8 md:px-16 p-2 md:p-4 border border-black bg-white hover:bg-opacity-70 rounded text-lg text-black font-semibold'>play </button>
              <button className=' mr-3 px-8 md:px-16 p-2 md:p-4 border border-black bg-gray-400 hover:bg-opacity-70 rounded text-white text-lg font-semibold'> info</button>
          </div>
        
      </div>
    )
  } 

export default MainMovietitle;
