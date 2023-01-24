import React from "react";
import LeftClick from "../components/LeftClick";

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
      <LeftClick difficulties={difficulties} />
    </>
  );
}

export default App;
