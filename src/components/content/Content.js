import React from "react";
import { useSelector } from "react-redux";

const Content = () => {
  const array = useSelector(state => state.array.array)
  const currentBubbleTwo = useSelector(state => state.bubbleSort.currentBubbleTwo)
  const currentSwappers = useSelector(state => state.swapper.currentSwappers)
  const currentSorted = useSelector(state => state.sorted.currentSorted)
  const numWidth = Math.floor(window.innerWidth / (array.length * 3));
  const width = `${numWidth}px`;
  const numMargin = array.length < 5 ?
    10 : array.length < 10 ?
      8 : array.length < 15 ?
        6 : array.length < 20 ?
          4 : array.length < 25 ?
            3.5 : array.length < 30 ?
              3 : 2.5;
  const margin = `${numMargin}px`;
  const color = numWidth > 20 ? "white" : "transparent";
  const numFont = numWidth > 70 ?
    20 : numWidth > 60 ?
      18 : numWidth > 50 ?
        16 : numWidth > 40 ?
          14 : numWidth > 30 ?
            12 : numWidth > 20 ?
              10 : 8;
  const fontSize = `${numFont}px`
  return (
    <div className="w-full h-auto bg-slate-300 text-center">
      {array.length ? array.map((number, index) => {
        const backgroundColor = currentSwappers.includes(index) ?
          "rgba(219, 57, 57, 0.8)" : currentBubbleTwo.includes(index) ?
          "rgba(78, 216, 96, 0.8)": currentSorted.includes(index) ?
          "rgba(169, 92, 232, 0.8)" : "rgba(66, 134, 244, 0.8)";
        return <div
          className="pt-1.5 font-sans font-medium inline-block"
          key={index}
          style={{ height: `${number * 3}px`, width: width, marginLeft: margin, marginRigh: margin, backgroundColor: `${backgroundColor}`, color: color, fontSize: fontSize }}>
          {number}
        </div>
      }) : null
      }
    </div>
  )

}

export default Content;
