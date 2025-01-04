import  { useEffect } from 'react'
import{API_url, options} from "../utils/constants";
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';



const useNowPlayingmovies=()=>{
    const disptch=useDispatch();
  //fetch data from TMDB api and update store 
  const NowPlayingMovies = async()=>{
    // console.log(API_url,options);
    const data= await fetch(API_url, options);
    const json= await data.json();
    // console.log(json.results);
    disptch(addNowPlayingMovies(json.results));
  }
  useEffect(()=>{
    NowPlayingMovies();
  },[]);
  
}
export default useNowPlayingmovies;
