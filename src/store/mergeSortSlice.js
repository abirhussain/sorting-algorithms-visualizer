import { createSlice } from "@reduxjs/toolkit";

const mergeSortSlice = createSlice({
    name:'mergeSort',
    initialState: {currentMergeX:[]},
    reducers: {
        setCurrentMergeX (state, action) {
            state.currentMergeX = action.payload;
        }
    }
})

export const mergeSortActions = mergeSortSlice.actions;
export default mergeSortSlice;