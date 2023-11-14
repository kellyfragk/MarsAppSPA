import "./App.css";
const Content = ({ title, paragraph1, paragraph2, image }) => {
  return (
    <>
      <img src={image} className="nasaLogo" />
      <h1>{title}</h1>
      <p>{paragraph1}</p>
      <p>{paragraph2}</p>
    </>
  );
};

export default Content;
