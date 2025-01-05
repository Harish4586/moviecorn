import React from 'react'
import MovieCard from './MovieCard'


const MoviesList = ({title,movies}) => {
    // console.log("form moviesList",title,movies);

  return (
    <div className='p-6 text-white'>
        <h1 className='font-semibold text-2xl'>{title}</h1>
        <div className='flex overflow-x-scroll w-full no-scrollbar '>
        <div className='flex '>
            { movies ? movies.map((movie)=>
            <MovieCard key={movie.backdrop_path} id={movie.backdrop_path} name={movie.original_title }  />) : <div/>}
        </div>
    </div>
    </div>
  )
}

export default MoviesList
