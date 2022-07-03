import { createSlice } from "@reduxjs/toolkit";

const bubbleSortSlice = createSlice({
    name:'bubbleSort',
    initialState:{currentBubbleTwo: []},
    reducers:{
        setCurrentBubbleTwo (state, action){
            state.currentBubbleTwo = action.payload
        }
    }
})

export const bubbleSortActions = bubbleSortSlice.actions;
export default bubbleSortSlice