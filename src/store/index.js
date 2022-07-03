import { configureStore } from '@reduxjs/toolkit'
import algorithmSlice from './algorithmSlice';
import arraySlice from './arraySlice';
import bubbleSortSlice from './bubbleSortSlice';
import runningSlice from './runningSlice';
import sortedSlice from './sortedSlice';
import swapperSlice from './swapperSlice';

const store = configureStore({
    reducer: {
        swapper: swapperSlice.reducer,
        array: arraySlice.reducer,
        sorted: sortedSlice.reducer,
        running: runningSlice.reducer,
        bubbleSort: bubbleSortSlice.reducer,
        algorithm: algorithmSlice.reducer,
    }
})

export default store;