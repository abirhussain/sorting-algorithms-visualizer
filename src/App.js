import Toolbar from "./components/toolbar/Toolbar";
import Content from "./components/content/Content";

function App() {
  return (
    <div className=" flex flex-col w-full md:w-9/12 m-auto lg:text-2xl">
      <h1 className="font-extrabold text-blue-400 text-center bg-yellow-100 lg:text-4xl lg:p-2">Sorting Algorithms Visualizer</h1>
      <Toolbar />
      <Content />
    </div>
  );
}

export default App;
