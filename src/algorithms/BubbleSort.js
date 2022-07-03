import { bubbleSortActions } from "../store/bubbleSortSlice";
import { sortedActions } from "../store/sortedSlice";
import { runningSliceActions } from "../store/runningSlice";
import { arrayActions } from "../store/arraySlice";
import { swapperActions } from "../store/swapperSlice";

function BubbleSort(stateArray, dispatch, speed) {
  let array = stateArray.slice(0),
      toDispatch = [],
      sorted = false,
      round = 0;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length - 1 - round; i++) {
      toDispatch.push([i, i + 1]);
      if (array[i] > array[i + 1]) {
        toDispatch.push([i, i + 1, true]);
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        sorted = false;
        toDispatch.push(array.slice(0));
        toDispatch.push([]);
      }
    }
    toDispatch.push([true, array.length - 1 - round]);
    round++;
  }
  handleDispatch(toDispatch, dispatch, array, speed);
  return array;
}

function handleDispatch(toDispatch, dispatch, array, speed) {
  if (!toDispatch.length) {
    dispatch(bubbleSortActions.setCurrentBubbleTwo(array.map((num, index) => index)))
    setTimeout(() => {
      dispatch(bubbleSortActions.setCurrentBubbleTwo([]))
      dispatch(sortedActions.setCurrentSorted(array.map((num, index) => index)))
      dispatch(runningSliceActions.setRunning(false))
    }, 900);
    return;
  }
  let dispatchFunction = toDispatch[0].length > 3 ?
    arrayActions.setArray : toDispatch[0].length === 3 || toDispatch[0].length === 0 ?
      swapperActions.setCurrentSwappers : toDispatch[0].length === 2 && typeof toDispatch[0][0] === "boolean" ?
        sortedActions.setCurrentSorted : bubbleSortActions.setCurrentBubbleTwo
  dispatch(dispatchFunction(toDispatch.shift()));
 
  setTimeout(() => {
    handleDispatch(toDispatch, dispatch, array, speed);
  }, speed);
}

export default BubbleSort;
