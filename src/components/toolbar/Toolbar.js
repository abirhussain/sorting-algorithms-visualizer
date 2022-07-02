import React, { useState } from "react";
import "./Toolbar.css";

const Toolbar = () => {
  const [algorithm, setAlgorithm] = useState("")
  const isRunning = false
  const color = isRunning ? "rgba(214, 29, 29, 0.8)" : "white";
  const cursor = isRunning ? "auto" : "pointer";
  const array = [5]
  const speed = 570 - Math.pow(array.length, 2) > 0 ? 570 - Math.pow(array.length, 2) : 0;


  const generateArray = () => {

  }
  const handleChange = () => {

  }
  const handleClick = (algorithmName) => {
    setAlgorithm(algorithmName)
  }

  const sort = () => {

  }



  return (
    <div id="toolbar">
      <div
        id={!isRunning ? "generateArray" : "generateArrayX"}
        style={{ color: color, cursor: cursor }}
        onClick={!isRunning ? () => generateArray(array.length) : null}
      >
        Generate New Array
      </div>
      <div className="separator"></div>
      <div
        id="arraySize"
        style={{ color: color }}>
        Change Array Size & Sorting Speed
      </div>
      <input
        id="changeSize"
        type="range"
        min="0"
        max="100"
        style={{ background: color, cursor: cursor }}
        disabled={isRunning ? "disabled" : null}
        onChange={handleChange}
      />
      <div className="separator"></div>
      <div
        className={algorithm === "mergeSort" ? "currentAlgorithmButton" : "algorithmButton"}
        onClick={() => handleClick("mergeSort")}
      >
        Merge Sort
      </div>
      <div
        className={algorithm === "quickSort" ? "currentAlgorithmButton" : "algorithmButton"}
        onClick={() => handleClick("quickSort")}>
        Quick Sort
      </div>
      <div
        className={algorithm === "heapSort" ? "currentAlgorithmButton" : "algorithmButton"}
        onClick={() => handleClick("heapSort")}>
        Heap Sort
      </div>
      <div
        className={algorithm === "bubbleSort" ? "currentAlgorithmButton" : "algorithmButton"}
        onClick={() => handleClick("bubbleSort")}>
        Bubble Sort
      </div>
      <div className="separator"></div>
      {algorithm ? <div
        id="sort"
        style={{ color: color, cursor: cursor }}
        onClick={!isRunning ? () => sort(algorithm, array, speed) : null}>
        Sort!
      </div> : null
      }
    </div>
  )

}

export default Toolbar;
