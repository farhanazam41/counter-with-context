import CountContext from "./context";
import "./styles.css";
import { useState } from "react";
import Counter from "./Counter";

export default function App() {
  const [count, setCount] = useState(0);

  const handleIncrementCounter = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrementCounter = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <CountContext.Provider
      className="App"
      value={{ count, handleIncrementCounter, handleDecrementCounter }}
    >
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>{count}</div>
      <Counter />
    </CountContext.Provider>
  );
}
