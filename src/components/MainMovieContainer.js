import React from 'react'
import { useSelector } from 'react-redux'
import MainMovietitle from './MainMovietitle';
import MainMovieVideo from './MainMovieVideo';

const MainMovieContainer = () => {
    const movies= useSelector(store=>store.movies?.NowPlayingMovies);
    if(movies===null) return; //early return if movies are not present when loaded initially
    const mainMovie= movies[0];
    // console.log("from main movie",mainMovie);
    //we'll need two things
     //1. videoTitle
     //2. videoBackground
     const {original_title,overview,id}=mainMovie;
  return (
    <div>
      <MainMovietitle title={original_title} overview={overview} />
      <MainMovieVideo  movieId={id} />
    </div>
  )
}

export default MainMovieContainer
