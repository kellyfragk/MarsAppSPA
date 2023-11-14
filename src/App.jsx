import { useEffect, useState, createContext, useRef } from "react";
import axios from "axios";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Content from "./Content.jsx";
import nasa from "./assets/nasa.png";
import Button from "./Button.jsx";
import CountMessage from "./CountMessage.jsx";
import Select from "react-select";

// Test data
const titleNasa = "NASA";
const paragraph1Nasa =
  "The National Aeronautics and Space Administration (NASA /ˈnæsə/) is an\n" +
  "        independent agency of the U.S. federal government responsible for the\n" +
  "        civil space program, aeronautics research, and space research.";
const paragraph2Nasa =
  "Established in 1958, NASA succeeded the National Advisory Committee for\n" +
  "        Aeronautics (NACA) to give the U.S. space development effort a\n" +
  "        distinctly civilian orientation, emphasizing peaceful applications in\n" +
  "        space science.";

export const CountContext = createContext();
function App() {
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("counter")),
  );
  const [rovers, setRovers] = useState();
  const [currentRover, setCurrentRover] = useState();
  const [currentCamera, setCurrentCamera] = useState();
  const [photos, setPhotos] = useState();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    axios.get("/rovers").then((response) => {
      setRovers(response.data);
    });
  }, []);

  const roversNames = [];

  if (rovers) {
    rovers.rovers.forEach((x) => {
      roversNames.push({ value: x.name, label: x.name });
    });
  }

  let camerasNames = [];

  if (rovers) {
    camerasNames = [];
    const roverObject = rovers.rovers.find((rover) => {
      return rover.name === currentRover;
    });

    // if roverObject is not undefined construct cameras array
    if (roverObject !== undefined) {
      roverObject.cameras.forEach((x) => {
        camerasNames.push({ value: x.name, label: x.name });
      });
    }
  }

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(count));
  }, [count]);

  const handlerCount = () => {
    setCount((count) => count + 1);
  };

  const retrievePhotos = (event) => {
    event.preventDefault();
    axios
      .get(`/rovers/${currentRover}/photos/${currentCamera}`)
      .then((response) => {
        setPhotos(response.data);
      });
    setIsActive(true);
  };

  let photosResult = [];
  if (photos) {
    photosResult = photos.photos.slice(0, 5).map((x) => {
      return <img src={x.img_src} key={x.id} className="photo" />;
    });
  }

  return (
    <>
      <Content
        title={titleNasa}
        paragraph1={paragraph1Nasa}
        paragraph2={paragraph2Nasa}
        image={nasa}
      />
      <form onSubmit={retrievePhotos}>
        <Select
          options={roversNames}
          className="options"
          onChange={(e) => {
            setCurrentRover(e.value);
          }}
        />
        <Select
          options={camerasNames}
          className="options"
          onChange={(e) => {
            setCurrentCamera(e.value);
          }}
        />
        <button type="submit">Search</button>
      </form>

      {isActive && (
        <div className="modal-container">
          <div className="modal">
            <div>
              Displaying photos for rover {currentRover} and camera{" "}
              {currentCamera}
            </div>
            <div>{photosResult}</div>
            <button
              style={{ margin: "1em" }}
              onClick={() => {
                setIsActive(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Vite + React</h2>
      <div className="card">
        <CountContext.Provider value={count}>
          <CountMessage />
        </CountContext.Provider>

        <Button handlerCount={handlerCount} />

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
