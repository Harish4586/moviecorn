import React from 'react'
import { MovieCardImg } from '../utils/constants'

const MovieCard = ({id,name}) => {
  return (
    <div>
        <div className='w-60 py-2 ml-2 font-semibold rounded'>
    
      <img alt={name}
      src={MovieCardImg+id}
      className='rounded'
      />
      {name}
    </div>
    </div>
  )
}

export default MovieCard
