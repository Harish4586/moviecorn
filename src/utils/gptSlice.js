import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearchBar:false,
    },
    reducers:{
        toggleGptSerachView: (state)=>{
          state.showGptSearchBar= !state.showGptSearchBar;
        }
    }
});
export const {toggleGptSerachView} = gptSlice.actions;
export default gptSlice.reducer;