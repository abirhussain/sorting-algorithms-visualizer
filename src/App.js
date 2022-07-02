import "./App.css"
import {useSelector} from "react-redux"

function App() {
  const counter = useSelector((state)=>state.counter.counter)
  return (
    <div className="App">
      <h1>Sorting Algorithms Visualizer</h1>
      <h2>Counter Value: {counter}</h2>
    </div>
  );
}

export default App;
