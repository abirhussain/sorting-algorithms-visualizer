import "./App.css";
import Bar from "./components/Bar/Bar";

function App() {
  return (
    <>
      <div className="array-bar-position">
        <Bar value={70} />
        <Bar value={40} />
      </div>
    </>
  );
}

export default App;
