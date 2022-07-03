import { createSlice } from "@reduxjs/toolkit";

const runningSlice = createSlice({
    name:'running',
    initialState: {isRunning: false},
    reducers: {
        setRunning(state,action){
            state.isRunning = action.payload
        }
    }
})
export const runningSliceActions = runningSlice.actions
export default runningSlice