import { createSlice } from "@reduxjs/toolkit";

const moviesSlice= createSlice({
   name:"movies",
   initialState:{
      NowPlayingMovies:null,
      mainMovieTrailer:null,
      popularMovies:null,
      upcomingMovies:null,
      topRatedMovies:null,
      GptSearchedMovies:null,
   },
   reducers:{
    addNowPlayingMovies:(state,action)=>{
     state.NowPlayingMovies=action.payload;
    },
    addUpcomingMovies:(state,action)=>{
     state.upcomingMovies=action.payload;
    },
    addtopRatedMovies:(state,action)=>{
     state.topRatedMovies=action.payload;
    },
    addpopularMovies:(state,action)=>{
     state.popularMovies=action.payload;
    },
    addMovieTrailer:(state,action)=>{
      state.mainMovieTrailer=action.payload;
    },
    addGptSearchedMovies:(state,action)=>{
      state.GptSearchedMovies=action.payload;
    }
    ,
    removeGptSearchedMovies:(state)=>{
      state.GptSearchedMovies=null;
    }
    }
    
   
});
export const{addNowPlayingMovies,addpopularMovies,addUpcomingMovies,addtopRatedMovies,addMovieTrailer,addGptSearchedMovies,removeGptSearchedMovies}= moviesSlice.actions;
export default moviesSlice.reducer;