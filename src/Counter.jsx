import { useContext } from "react";
import { CountContext } from "./App.jsx";
import styled from "@emotion/styled";

const CounterContainer = styled.div((props) => ({
  background: "pink",
  margin: "1em auto 1em",
  width: "5em",
}));

const Counter = () => {
  const count = useContext(CountContext);
  return <CounterContainer>{count}</CounterContainer>;
};

export default Counter;
