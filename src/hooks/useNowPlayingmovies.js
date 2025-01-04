import  { useEffect } from 'react'
import{API_url, options ,PopularMovie_url,upcoming_url,top_rated_url} from "../utils/constants";
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies,addpopularMovies ,addUpcomingMovies,addtopRatedMovies} from '../utils/moviesSlice';



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
  const popularMovies = async()=>{
    // console.log(API_url,options);
    const data= await fetch(PopularMovie_url, options);
    const json= await data.json();
    // console.log( "popular",json.results);
    disptch(addpopularMovies(json.results));
  }
  const upcomingMovies = async()=>{
    // console.log(API_url,options);
    const data= await fetch(upcoming_url, options);
    const json= await data.json();
    // console.log( "popular",json.results);
    disptch(addUpcomingMovies(json.results));
  }
  const topRatedMovies = async()=>{
    // console.log(API_url,options);
    const data= await fetch(top_rated_url, options);
    const json= await data.json();
    // console.log( "popular",json.results);
    disptch(addtopRatedMovies(json.results));
  }
   
  useEffect(()=>{
    NowPlayingMovies();
    popularMovies();
    upcomingMovies();
    topRatedMovies();
  },[]);
  
}
export default useNowPlayingmovies;
