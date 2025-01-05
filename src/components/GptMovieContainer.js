import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList';

const GptMovieContainer = () => {
  const SearchedMovies= useSelector(store=>store.movies.GptSearchedMovies);
  const filteredMovies= SearchedMovies&& SearchedMovies.filter(movie=>movie.backdrop_path)
  // console.log("from gpt movie container",SearchedMovies)
  return (
    <div className=' bg-black bg-opacity-70'>
      
    <div className='mt-[10%]'>
      <MoviesList title={"The Searched Movies are-->"} movies={filteredMovies} />
    </div>
  </div>
  )
}

export default GptMovieContainer
