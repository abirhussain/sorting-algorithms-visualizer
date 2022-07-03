import {createSlice} from "@reduxjs/toolkit";

const arraySlice = createSlice({
    name:'array',
    initialState: {array:[1,2]},
    reducers: {
        setArray(state, action){
            state.array = action.payload
        }

    }

})

export const arrayActions = arraySlice.actions
export default arraySlice;