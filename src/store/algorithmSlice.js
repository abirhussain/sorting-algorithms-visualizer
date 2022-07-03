import { createSlice } from "@reduxjs/toolkit";

const algorithmSlice = createSlice({
    name:'algorithm',
    initialState: {algorithm:""},
    reducers:{
        setAlgorithm(state, action){
            state.algorithm = action.payload
        }
    }
})

export const algorithmActions = algorithmSlice.actions;
export default algorithmSlice