const Content = ({ title, paragraph1, paragraph2, image }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{paragraph1}</p>
      <p>{paragraph2}</p>
      <img src={image} />
    </>
  );
};

export default Content;
