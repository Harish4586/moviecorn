import React from 'react'

const MainMovietitle = ({title,overview}) => {
    return (
      <div className='pt-[25%] px-16 w-screen aspect-video absolute text-white bg-gradient-to-r from-black'>
          <h1 className='text-4xl font-semibold'>{title}</h1>
          <p className='py-6 text-lg w-[40%]'>{overview}</p>
          <div className='p-10'>
              <button className='mr-3 px-16 p-4 border border-black bg-white hover:bg-opacity-70 rounded text-lg text-black font-semibold'>play </button>
              <button className='mr-3 px-16 p-4 border border-black bg-gray-400 hover:bg-opacity-70 rounded text-lg font-semibold'> info</button>
          </div>
        
      </div>
    )
  } 

export default MainMovietitle;
