import React from "react";
import "./App.css";
import { Example1, example1title } from "./examples/example1";
import { Example2, example2title } from "./examples/example2";
import { Example3, example3title } from "./examples/example3";
import { Example4, example4title } from "./examples/example4";
import { Example5, example5title } from "./examples/example5";
import { Example6, example6title } from "./examples/example6";
import { Example7, example7title } from "./examples/example7";
import { Example8, example8title } from "./examples/example8";

function App() {
  const [currentExample, setCurrentExample] = React.useState<number | null>(
    null
  );

  return (
    <div className="App" style={{ height: "100%", width: "100%" }}>
      <div style={{ display: "flex", height: "100%", width: "100%" }}>
        <div className="buttonsContainer">
          <button onClick={() => setCurrentExample(1)}>{example1title}</button>
          <button onClick={() => setCurrentExample(2)}>{example2title}</button>
          <button onClick={() => setCurrentExample(3)}>{example3title}</button>
          <button onClick={() => setCurrentExample(4)}>{example4title}</button>
          <button onClick={() => setCurrentExample(5)}>{example5title}</button>
          <button onClick={() => setCurrentExample(6)}>{example6title}</button>
          <button onClick={() => setCurrentExample(7)}>{example7title}</button>
          <button onClick={() => setCurrentExample(8)}>{example8title}</button>
        </div>
        <div className="examplesContainer">
          {currentExample === 1 && <Example1 />}
          {currentExample === 2 && <Example2 />}
          {currentExample === 3 && <Example3 />}
          {currentExample === 4 && <Example4 />}
          {currentExample === 5 && <Example5 />}
          {currentExample === 6 && <Example6 />}
          {currentExample === 7 && <Example7 />}
          {currentExample === 8 && <Example8 />}
        </div>
      </div>
    </div>
  );
}

export default App;
