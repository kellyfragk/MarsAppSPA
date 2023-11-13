import Counter from "./Counter.jsx";

const CountMessage = ({ count }) => {
  return (
    <>
      <div>The current count is: </div>
      <Counter count={count} />
    </>
  );
};

export default CountMessage;
