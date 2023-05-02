import React from 'react';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MouseIcon from '@mui/icons-material/Mouse';
import GenericCard from './GenericCard';

const SplashScreen = () => {
    let menuItems = [
        {
            cardStyle: 'menu_cards',
            headerTitle: 'Left Click',
            footerTitle: 'Test your left click out!',
            extraStrings: [],
            image: <MouseIcon sx={{transform: 'scale(1.5)'}}/>
        },
        {
            cardStyle: 'menu_cards',
            headerTitle: 'Right Click',
            footerTitle: 'Test your right speed!',
            extraStrings: [],
            image: <MouseIcon sx={{transform: 'scale(1.5)'}}/>
        },
        {
            cardStyle: 'menu_cards',
            headerTitle: 'Scrollwheel',
            footerTitle: 'Test your scroll skillz!',
            extraStrings: [],
            image: <MouseIcon sx={{transform: 'scale(1.5)'}}/>
        },
        {
            cardStyle: 'menu_cards',
            headerTitle: 'Middle Click',
            footerTitle: 'No one uses this button... but try it out!',
            extraStrings: [],
            image: <MouseIcon sx={{transform: 'scale(1.5)'}}/>
        },
    ]
    return (
        <>
            <Grid container direction={'column'} spacing={5}>
                <Grid item alignSelf={'center'}>
                    <Typography variant={'h2'} sx={{color: '#fff'}}>Generic Heading</Typography>
                </Grid>
                <Grid item>
                    <Grid container rowGap={5}>
                        {
                            menuItems.map((item) => {
                                return (
                                    <Grid item xs={12} md={6} lg={6} key={item.id}>
                                        <GenericCard
                                            cardStyle={item.cardStyle}
                                            image={item.image}
                                            headerTitle={item.headerTitle}
                                            extraStrings={item.extraStrings}
                                            footerTitle={item.footerTitle}/>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default SplashScreen;