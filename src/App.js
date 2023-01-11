import React, {useEffect, useState} from "react";
import './App.css';
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import Card from "@mui/material/Card";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

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
    const [y, setY] = useState(0);
    const [x, setX] = useState(0);
    const [dummyX, setDummyX] = useState(0);
    const [dummyY, setDummyY] = useState(0);
    const [count, setCount] = useState(5);
    const [started, setStarted] = useState(false);
    const [open, setOpen] = useState(true);
    const [option, setOption] = useState(JSON.stringify(difficulties.easy));
    const [spawn, setSpawn] = useState(false);
    const [end, setEnd] = useState();
    const dummies = [
        {
            variant: 'indeterminate',
            className: 'color_change_animation',
            sx: {},
            size: 220,
            onClick: () => {},
        },
    ]

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
        <div className="App">
            <header className="App-header">
                <Typography variant={'h2'} sx={{userSelect: 'none'}}>
                    {!started ? 'START' : count}
                </Typography>
                <Grid container justifyContent={'center'} alignSelf={'center'}>
                    <Grid item xs={12}>
                        <Stack>
                            <CircularProgress variant={!open ? 'indeterminate' : 'determinate'}
                                              className={'color_change_animation'}
                                              sx={{position: 'absolute', top: y, left: x,}}
                                              size={option.size}
                                              onClick={doSomething}/>
                            {/* {started &&
                            dummies.map((d) => {
                               return (
                                   <CircularProgress variant={d.variant} className={'evil_circle'} sx={{position: 'absolute', top: dummyY, left: dummyX,}} size={d.size}/>
                               )
                            })} */}
                        </Stack>
                    </Grid>
                </Grid>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}>
                    {!end &&
                    <Card className={'splash_screen'} onClick={(e) => {
                        e.stopPropagation()
                    }}>
                        <Grid container justifyContent={'center'} padding={2}>
                            <Grid item xs={12}>
                                <Typography variant={'h3'}>
                                    Options
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent={'center'}>
                            <Grid item xs={12}>
                                <FormControl>
                                    <FormLabel id="demo-controlled-radio-buttons-group"
                                               sx={{fontSize: '1em'}}>Difficulty</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={option}
                                        onChange={optionHandler}
                                    >
                                        <FormControlLabel value={JSON.stringify(difficulties.easy)} control={<Radio/>}
                                                          label="Easy"/>
                                        <FormControlLabel value={JSON.stringify(difficulties.medium)} control={<Radio/>}
                                                          label="Medium"/>
                                        <FormControlLabel value={JSON.stringify(difficulties.hard)} control={<Radio/>}
                                                          label="Hard"/>
                                        <FormControlLabel value={JSON.stringify(difficulties.legendary)}
                                                          control={<Radio/>} label="Legendary"/>
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <Button variant={'contained'} onClick={modeHandler}>Select</Button>
                            </Grid>
                        </Grid>
                    </Card>}
                    {end &&
                    <Card className={'splash_screen'}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography variant={'h3'}>
                                    {end}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Box display={'flex'} justifyContent={'center'}>
                            <Button variant={'contained'} onClick={restartHandler}>Restart</Button>
                        </Box>
                    </Card>}
                </Backdrop>
            </header>
        </div>
    );
}


export default App;
