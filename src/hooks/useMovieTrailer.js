import { useEffect } from "react";
import { options } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";

const useMovieTrailer=(movieId)=>{
    // console.log("form hook",movieId);
    const dispatch=useDispatch();

const getMovieTrailer=async()=>{
    const respose= await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",options)
    const data= await respose.json();
    // console.log(data);
    const finalTrailer=data.results.filter(video=>video.type==="Trailer");
    const trailerVideo= finalTrailer[0];
    // console.log(trailerVideo);
    dispatch(addMovieTrailer(trailerVideo));

}
useEffect(()=>{
    getMovieTrailer();
},[]);



}
export default useMovieTrailer;