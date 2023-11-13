import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Content from "./Content.jsx";
import nasa from "./assets/nasa.png";
import Button from "./Button.jsx";
import CountMessage from "./CountMessage.jsx";

// Test data
const titleNasa = "Nasa";
const paragraph1Nasa =
  "The National Aeronautics and Space Administration (NASA /ˈnæsə/) is an\n" +
  "        independent agency of the U.S. federal government responsible for the\n" +
  "        civil space program, aeronautics research, and space research.";
const paragraph2Nasa =
  "Established in 1958, NASA succeeded the National Advisory Committee for\n" +
  "        Aeronautics (NACA) to give the U.S. space development effort a\n" +
  "        distinctly civilian orientation, emphasizing peaceful applications in\n" +
  "        space science.";

function App() {
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("counter")),
  );

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(count));
  }, [count]);

  const handlerCount = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <Content
        title={titleNasa}
        paragraph1={paragraph1Nasa}
        paragraph2={paragraph2Nasa}
        image={nasa}
      />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/*original code*/}
        {/*<button onClick={() => setCount((count) => count + 1)}>*/}
        {/*  count is {count}*/}
        {/*</button>*/}

        <Button handlerCount={handlerCount} />
        <CountMessage count={count} />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
