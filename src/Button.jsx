import StyledButton from "./StyledButton.jsx";
const Button = ({ handlerCount }) => {
  return <StyledButton onClick={handlerCount}> Click me!</StyledButton>;
};

export default Button;
