import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBg from './VideoBg'

const MainContainer = () => {
    const movies = useSelector((state) => state.movies?.addNowPlayingMovie);
    if(!movies) return;

    const mainMovie = movies[0];
    console.log(mainMovie,"main movi")

    const {original_title, overview, id} = mainMovie;
    console.log(original_title, overview, id,"main cotner")
  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBg movieId={id}/>
    </div>
  )
}

export default MainContainer