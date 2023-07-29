import React from "react";
import Grid  from "@mui/material/Grid";

const Home = () => {
    return (
        <>
            <Grid container direction='column'>
                <Grid item>
                    <Grid container>
                            <Grid item sx={{color: '#fff'}}>
                                The home screen
                            </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Home;
