import React from "react";
import "./App.css";
import { Example1 } from "./examples/example1";
import { Example2 } from "./examples/example2";
import { Example3 } from "./examples/example3";
import { Example4 } from "./examples/example4";

function App() {
  const [currentExample, setCurrentExample] = React.useState<number | null>(
    null
  );

  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ height: "70px", borderBottom: "solid 3px blue" }}>
          <button onClick={() => setCurrentExample(1)}>1</button>
          <button onClick={() => setCurrentExample(2)}>2</button>
          <button onClick={() => setCurrentExample(3)}>3</button>
          <button onClick={() => setCurrentExample(4)}>4</button>
          <button onClick={() => setCurrentExample(5)}>5</button>
          <button onClick={() => setCurrentExample(6)}>6</button>
        </div>
        <div>
          {currentExample === 1 && <Example1 />}
          {currentExample === 2 && <Example2 />}
          {currentExample === 3 && <Example3 />}
          {currentExample === 4 && <Example4 />}
        </div>
      </div>
    </div>
  );
}

export default App;
