import "./App.css";
import { Heading } from "./App.jsx";
const Content = ({ title, paragraph1, paragraph2, image }) => {
  return (
    <>
      <img src={image} className="nasaLogo" />
      <Heading fg="#de3163">{title}</Heading>
      <p>{paragraph1}</p>
      <p>{paragraph2}</p>
    </>
  );
};

export default Content;
