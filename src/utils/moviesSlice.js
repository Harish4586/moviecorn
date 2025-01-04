import { createSlice } from "@reduxjs/toolkit";

const moviesSlice= createSlice({
   name:"movies",
   initialState:{
      NowPlayingMovies:null,
      mainMovieTrailer:null,
      popularMovies:null,
      upcomingMovies:null,
      topRatedMovies:null,
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
    }
   }
});
export const{addNowPlayingMovies,addpopularMovies,addUpcomingMovies,addtopRatedMovies,addMovieTrailer}= moviesSlice.actions;
export default moviesSlice.reducer;