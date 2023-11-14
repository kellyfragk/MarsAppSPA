import { useContext } from "react";
import { CountContext } from "./App.jsx";

const Counter = () => {
  const count = useContext(CountContext);
  return <div>{count}</div>;
};

export default Counter;
