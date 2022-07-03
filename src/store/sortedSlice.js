import { createSlice } from "@reduxjs/toolkit";

const sortedSlice = createSlice({
    name:'sorted',
    initialState:{currentSorted: []},
    reducers: {
        setCurrentSorted(state, action){
            if (action.payload.length) {
              state.currentSorted = state.currentSorted.concat(action.payload)
              } else {
                state.currentSorted = []
              }
        }
    }

})

export const sortedActions = sortedSlice.actions
export default sortedSlice