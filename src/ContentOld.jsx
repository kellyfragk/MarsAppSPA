import nasa from "./assets/nasa.png";

const ContentOld = () => {
  return (
    <>
      <h1>Nasa</h1>
      <p>
        The National Aeronautics and Space Administration (NASA /ˈnæsə/) is an
        independent agency of the U.S. federal government responsible for the
        civil space program, aeronautics research, and space research.
      </p>
      <p>
        Established in 1958, NASA succeeded the National Advisory Committee for
        Aeronautics (NACA) to give the U.S. space development effort a
        distinctly civilian orientation, emphasizing peaceful applications in
        space science.
      </p>
      <img src={nasa} />
    </>
  );
};

export default ContentOld;
