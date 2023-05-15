import React from "react";
import SplashScreen from "../components/SplashScreen";


const difficulties = {
  easy: {
    size: 150,
    speed: 1500,
    misClicks: 9,
  },
  medium: {
    size: 100,
    speed: 1500,
    misClicks: 4,
  },
  hard: {
    size: 50,
    speed: 1500,
    misClicks: 4,
  },
  legendary: {
    size: 25,
    speed: 1500,
    misClicks: 0,
  },
};

function App() {
  return (
    <>
      <SplashScreen/>
    </>
  );
}

export default App;
