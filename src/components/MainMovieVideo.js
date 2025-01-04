import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const MainMovieVideo = ({ movieId }) => {
    //this hook is used to fetch movie trailer using movie id from array of many videos clip from a movie
    //and upadte the store 
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.mainMovieTrailer);
//   console.log("from mainMovie", trailerVideo);
  return (
    <div>
      <iframe
       className="w-screen aspect-video"
        src={(trailerVideo?.key) ? "https://www.youtube.com/embed/"+trailerVideo.key+"?autoplay=1&amp;mute=1":"https://www.youtube.com/embed/"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        
      > </iframe>
    </div>
  );
};

export default MainMovieVideo;
