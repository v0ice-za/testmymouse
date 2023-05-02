import React, {useState, useEffect} from 'react';
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";

const SliderGame = () => {

    const [value, setValue] = useState(50);

    const handleScroll = (event) => {
        const direction = event.deltaY > 0 ? -10 : 10;
        const newValue = value + direction;
        if (newValue >= 0 && newValue <= 100) {
            setValue(newValue);
        }
    };


    return (
        <>
            <Grid container>
                <Grid item sx={{height: '400px', width: '200px'}}>
                    <Slider
                        orientation={'vertical'}
                        value={value}
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