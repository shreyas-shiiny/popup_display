import React, {  useState } from "react";
import Homepop from "./popups/Homepop";
import "../content/styles/Info.css";

const Home = () => {
  const [state, setState] = useState([false]);
  const [isBlur, setIsBlur] = useState(false);

  const toggleModal = () => {
    document.getElementById("home-pop").style.display = "block";
    setIsBlur(true);
    setState(!state);
  };

  return (
    <>
    <div className="home-center">
      <div className={`${isBlur && "home-blur"} `}>
        <br />
        <button onClick={toggleModal} className="btn-modal">
          click here for the pop
        </button>
        <p >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quidem
          animi, sapiente dignissimos voluptatibus ipsam rem! Placeat quo eaque,
          dolorem id adipisci ullam doloremque quis.
        </p>
      </div>
      <Homepop setIsBlur={setIsBlur} />
      </div>
    </>
  );
};

export default Home;