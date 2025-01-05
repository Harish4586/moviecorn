import React from 'react'
import MoviesList from './MoviesList';
import { useSelector } from 'react-redux';

//movies list will be shown on this page
//popular
//nowplaying
//trending
//horror
//and each movie will have m cards

const MovieContainer = () => {
  const movies= useSelector(store=>store.movies);
  // console.log(movies);
  return (
    <div className=' bg-black mt-40 md:mt-0'>
      
      <div className=' md:-mt-72 relative z-20'>
        <MoviesList title={"Now Playing Movies"} movies={movies.NowPlayingMovies} />
      <MoviesList title={"Popular Movies"} movies={movies.popularMovies} />
      <MoviesList title={"upcoming Movies"} movies={movies.upcomingMovies} />
      <MoviesList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
      </div>
    </div>
  )
}

export default MovieContainer;
