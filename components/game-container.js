import React, {useState} from 'react';
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
const GameContainer = () => {
    const [gameMode, setGameMode] = useState({leftClick: false, rightClick: false, middleClick: false, scroll: false});
    const [y, setY] = useState(0);
    const [x, setX] = useState(0);
    const [dummyX, setDummyX] = useState(0);
    const [dummyY, setDummyY] = useState(0);
    const [count, setCount] = useState(5);
    const [started, setStarted] = useState(false);
    const [open, setOpen] = useState(true);
    const [option, setOption] = useState(difficulties.easy);
    const [spawn, setSpawn] = useState(false);
    const [end, setEnd] = useState('');


    
    const doSomething = () => {
        setStarted(true);
        move();
        setCount(prevCount => prevCount + 1);
    }

    const modeHandler = () => {
        setOpen(false);
        setCount(JSON.parse(option).misClicks);
        setOption(prevState => JSON.parse(prevState));
    }

    //TODO: Get dynamic resolution - I used this outerWidth/innerHeight. It seems to work?
    const move = () => {
        setX(Math.floor(Math.random() * (window.outerWidth - option.size / 2)));
        setY(Math.floor(Math.random() * (window.innerHeight - option.size / 2)));
    }

    const optionHandler = (e) => {
        if (e.target.value !== ''){
            setOption(e.target.value);
        }
    }

    const restartHandler = () => {
        setEnd();
        setOpen(true);
        setStarted(false);
    }

    const spawnDummy = () => {
        setSpawn(true);
        setDummyX(Math.floor(Math.random() * (window.outerWidth - option.size / 2)));
        setDummyY(Math.floor(Math.random() * (window.innerHeight - option.size / 2)));
    }


    useEffect(() => {
        if (started){
            const interval = setInterval(() => {
                move();
                spawnDummy();
                setCount(prevCount => prevCount - 1);
            }, option.speed);
            return () => clearInterval(interval);
        }
    }, [count, started]);

    //Winning mechanic, can be changed
    useEffect(() => {
        if (count === 0) {
            setEnd('You LOSE!');
            setStarted(false);
            setOpen(true);
        } else if (count === 15){
            setEnd('You WIN!');
            setStarted(false);
            setOpen(true);
        }
    }, [count]);
    return (
        <>
            {/* This component needs to take care of the random position generation for the rest of the 
            game components... All the game components need to be called in here and changed based on 
            game mode that is selected...  */}
            {gameMode.leftClick && <LeftClick/>}
            {gameMode.rightClick && <drag-circle/>}
            {gameMode.middleClick && <middle-click/>}
            {gameMode.scroll && <slider-game/>}

        </>
    );
};

export default GameContainer;