import React from 'react';
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from 'next/link';

const GenericCard = ({headerTitle, extraStrings, footerTitle, image, cardStyle, link, onClick}) => {

    return (
        <>
        <Link href={link}>
            <Card className={cardStyle} onClick={onClick}>
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
        </Link>
        </>
    );
};

export default GenericCard;