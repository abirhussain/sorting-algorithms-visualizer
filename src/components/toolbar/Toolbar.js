import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { arrayActions } from "../../store/arraySlice";
import { sortedActions } from "../../store/sortedSlice";
import { runningSliceActions } from "../../store/runningSlice";
import { algorithmActions } from "../../store/algorithmSlice";
import bubbleSort from "../../algorithms/BubbleSort";
import mergeSort from "../../algorithms/MergeSort";

const Toolbar = () => {
  const algorithm = useSelector(state => state.algorithm.algorithm)
  const isRunning = useSelector(state => state.running.isRunning)
  const array = useSelector(state => state.array.array)
  const dispatch = useDispatch();
  const color = isRunning ? "rgba(214, 29, 29, 0.8)" : "white";
  const cursor = isRunning ? "auto" : "pointer";
  const speed = 570 - Math.pow(array.length, 2) > 0 ? 570 - Math.pow(array.length, 2) : 0;

  useEffect(() => {
    generateArray(15);
    document.getElementById("changeSize").value = 15;
  },[])

  const generateArray = (length) => {
    let arr = [];
    while (arr.length < length) {
      arr.push(Math.floor(Math.random() * 200) + 10);
    }
    dispatch(arrayActions.setArray(arr))
    dispatch(sortedActions.setCurrentSorted([]))
  }

  const handleClick = (algorithm) => {
    updateAlgorithm(algorithm);
  }

  const handleChange = (evt) => {
    generateArray(Math.floor((parseInt(evt.target.value)+3) * 2));
  }

  const updateAlgorithm = (algorithm) => {
    dispatch(algorithmActions.setAlgorithm(algorithm))
  }

  const sort = (algorithm, array, speed) => {
    let doSort = algorithm === "bubbleSort" ? bubbleSort : algorithm === "mergeSort" ?mergeSort:null;
    dispatch(sortedActions.setCurrentSorted([]))
    dispatch(runningSliceActions.setRunning(true))
    doSort(array, dispatch, speed);
  }

  return (
    <div className="flex space-x-3 md:justify-between bg-slate-400">
      <div className="flex flex-col">
        <div>
          <button
            className={!isRunning ? "p-2 bg-sky-600 hover:bg-sky-700 rounded-lg" : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}
            style={{ color: color, cursor: cursor }}
            onClick={!isRunning ? () => generateArray(array.length) : null}
          >
            Generate New Array
          </button>
          <div
            className="bg-red"
            style={{ color: color }}>
            Change Array Size & Sorting Speed
          </div>
          <input
            id="changeSize"
            type="range"
            min="0"
            max="25"
            style={{ background: color, cursor: cursor }}
            disabled={isRunning ? "disabled" : null}
            onChange={handleChange}
          />

        </div>

      </div>
      <div className="flex flex-col">
        <h2 className="text-center text-slate-100 text-base lg:text-2xl">Select Algorithm</h2>
        <div className="flex">
          <div
            className={algorithm === "mergeSort" ? "text-fuchsia-500 text-base font-mono cursor-pointer p-2 lg:text-2xl" : "bg-red text-white text-base font-mono cursor-pointer p-2 lg:text-xl"}
            onClick={() => handleClick("mergeSort")}
          >
            Merge Sort
          </div>
          <div
            className={algorithm === "quickSort" ? " text-fuchsia-500 text-base font-mono cursor-pointer p-2 lg:text-xl" : "bg-red text-white text-base font-mono cursor-pointer p-2 lg:text-xl"}
            onClick={() => handleClick("quickSort")}>
            Quick Sort
          </div>
        </div>
        <div className="flex">
          <div
            className={algorithm === "heapSort" ? "text-fuchsia-500 text-base font-mono cursor-pointer p-2 lg:text-xl" : "bg-red text-white text-base font-mono cursor-pointer p-2 lg:text-xl"}
            onClick={() => handleClick("heapSort")}>
            Heap Sort
          </div>
          <div
            className={algorithm === "bubbleSort" ? "text-fuchsia-500 text-base font-mono cursor-pointer p-2 lg:text-xl" : "bg-red text-white text-base font-mono cursor-pointer p-2 lg:text-xl"}
            onClick={() => handleClick("bubbleSort")}>
            Bubble Sort
          </div>
        </div>

      </div>
      <div className="grid place-content-center place-items-center">
        <div className="flex flex-row-reverse">
          {algorithm ? <button
            className="text-base font-mono bg-green-600 hover:bg-green-700 rounded-lg p-2 lg:text-2xl "
            style={{ color: color, cursor: cursor }}
            onClick={!isRunning ? () => sort(algorithm, array, speed) : null}>
            Sort!
          </button> : null
          }

        </div>

      </div>
    </div>
  )
}

export default Toolbar;
