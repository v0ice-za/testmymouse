import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { menuItems } from "../../assets/constants";
import GenericCard from "./../../components/GenericCard";

const GameList = () => {

    return (
        <>
            <Grid container direction={"column"} spacing={5}>
                <Grid item alignSelf={"center"}>
                    <Typography variant={"h2"} sx={{ color: "#fff" }}>
                        Generic Heading
                    </Typography>
                </Grid>
                <Grid item>
                    <Grid container rowGap={5}>
                        {menuItems.map((item, index) => {
                            return (
                                <Grid item xs={12} md={6} lg={6} key={index}>
                                    <GenericCard
                                        cardStyle={item.cardStyle}
                                        image={item.image}
                                        headerTitle={item.headerTitle}
                                        extraStrings={item.extraStrings}
                                        footerTitle={item.footerTitle}
                                        link={item.link}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default GameList;
