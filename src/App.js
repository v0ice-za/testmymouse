import React from "react";
import './App.css';
import LeftClick from './components/LeftClick';

const difficulties = {
    easy : {
        size: 150,
        speed: 1000,
        misClicks: 9,
    },
    medium : {
        size: 100,
        speed: 800,
        misClicks: 4,
    },
    hard : {
        size: 50,
        speed: 800,
        misClicks: 4,
    },
    legendary : {
        size: 25,
        speed: 800,
        misClicks: 0,
    },
}

function App() {
  

    return (
        <>
            <LeftClick difficulties={difficulties}/>
        </>
    );
}


export default App;
