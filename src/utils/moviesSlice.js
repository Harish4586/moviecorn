import { createSlice } from "@reduxjs/toolkit";

const moviesSlice= createSlice({
   name:"movies",
   initialState:{
      NowPlayingMovies:null,
      mainMovieTrailer:null,
   },
   reducers:{
    addNowPlayingMovies:(state,action)=>{
     state.NowPlayingMovies=action.payload;
    },
    addMovieTrailer:(state,action)=>{
      state.mainMovieTrailer=action.payload;
    }
   }
});
export const{addNowPlayingMovies,addMovieTrailer}= moviesSlice.actions;
export default moviesSlice.reducer;