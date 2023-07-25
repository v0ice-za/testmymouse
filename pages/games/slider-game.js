import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";

const SliderGame = () => {

    const [value, setValue] = useState(50);
    const [height, setHeight] = useState('200px');
    const [width, setWidth] = useState('15px');
    const [orientation, setOrientation] = useState('vertical');
    const [y, setY] = useState(0);
    const [x, setX] = useState(0);

    const move = () => {
        setX(Math.floor(Math.random() * (window.outerWidth/2)));
        setY(Math.floor(Math.random() * (window.innerHeight/2)));
        if(Math.random() > 0.5){
            setOrientation('vertical');
            setHeight('200px');
            setWidth('15px');
        } else {
            setOrientation('horizontal');
            setHeight('15px');
            setWidth('200px');
        }
    }

    const handleScroll = (event) => {

        const direction = event.deltaY > 0 ? -10 : 10;
        const newValue = value + direction;
        if (newValue >= 0 && newValue <= 100) {
            setValue(newValue);
        }
        if(value === 0 || value === 100){
            setValue(50);
            setHeight('200px');
            move();
        }

    };


    return (
        <>
            <Grid container>
                <Grid item sx={{height: height, width: '200px'}}>
                    <Slider
                        orientation={orientation}
                        value={value}
                        sx={{position: 'absolute', top: y, left: x, height: height, width: width}}
                        min={0}
                        max={100}
                        onWheel={handleScroll}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default SliderGame;