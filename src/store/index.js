import { configureStore, createSlice } from '@reduxjs/toolkit'


const counter = createSlice({
    name:'counter',
    initialState: {counter: 0},
    reducers: {
        increment(state, action){
            state.counter++
        }
    }
})

export const actions = counter.actions;
const store = configureStore({
    reducer: {
        counter: counter.reducer
    }
})

export default store;