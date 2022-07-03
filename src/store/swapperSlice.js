import { createSlice } from "@reduxjs/toolkit";

const swapperSlice = createSlice({
    name:'swapper',
    initialState:{currentSwappers:[]},
    reducers: {
        setCurrentSwappers(state,action){
            if (action.payload.length) {
              state.currentSwappers =  state.currentSwappers.concat(action.payload)
              } else {
                state.currentSwappers = []
              }
        }
    }
})

export const swapperActions = swapperSlice.actions;
export default swapperSlice;