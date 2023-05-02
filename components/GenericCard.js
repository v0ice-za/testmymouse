import React from 'react';
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const GenericCard = ({headerTitle, extraStrings, footerTitle, image, cardStyle}) => {

    return (
        <>
            <Card className={cardStyle}>
                <Grid container direction={'column'} alignItems={'center'} spacing={5}>
                    <Grid item alignSelf={'center'}>
                        {image}
                    </Grid>
                    <Grid item>
                        <Typography variant={'h4'}>{headerTitle}</Typography>
                    </Grid>
                    <Grid item>
                        <Stack>
                        {extraStrings?.map((string) => {
                            return (
                                <Typography>{string}</Typography>
                            )
                        })}
                        </Stack>
                    </Grid>
                    <Grid item>
                        <Typography variant={'h6'}>{footerTitle}</Typography>
                    </Grid>
                </Grid>
            </Card>
        </>
    );
};

export default GenericCard;