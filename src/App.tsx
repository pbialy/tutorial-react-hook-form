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
import { Example9, example9title } from "./examples/example9";
import { Example10, example10title } from "./examples/example10";
import { Example11, example11title } from "./examples/example11";
import { Example12, example12title } from "./examples/example12";

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
          <button onClick={() => setCurrentExample(9)}>{example9title}</button>
          <button onClick={() => setCurrentExample(10)}>
            {example10title}
          </button>
          <div
            style={{
              height: "26px",
              width: "100%",
              background: "purple",
              color: "yellow",
            }}
          >
            Last presentation line
          </div>
          <button onClick={() => setCurrentExample(11)}>
            {example11title}
          </button>
          <button onClick={() => setCurrentExample(12)}>
            {example12title}
          </button>
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
          {currentExample === 9 && <Example9 />}
          {currentExample === 10 && <Example10 />}
          {currentExample === 11 && <Example11 />}
          {currentExample === 12 && <Example12 />}
        </div>
      </div>
    </div>
  );
}

export default App;
