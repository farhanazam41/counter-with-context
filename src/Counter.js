import { useContext } from "react";
import CountContext from "./context";

const Counter = () => {
  const context = useContext(CountContext);
  const { handleIncrementCounter, handleDecrementCounter } = context;
  return (
    <div>
      <button onClick={handleIncrementCounter}>Increment + </button>
      <button onClick={handleDecrementCounter}>Decreement - </button>
    </div>
  );
};

export default Counter;
