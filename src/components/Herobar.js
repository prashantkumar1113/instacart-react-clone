import React from "react";
import {Box, Container, Grid} from "@mui/material";

export default function Herobar() {
    return (
        <Box sx={{bgcolor: "#DEECD6", height: 250}}>
            <Grid container spacing={2}>
                <Grid item xs={2}></Grid>
                <Grid item xs={7}>
                    <h1>Order groceries for delivery or pickup today</h1>
                    <p>
                        Whatever you want from local stores, brought right to
                        your door.
                    </p>
                </Grid>
                <Grid item xs={3} container direction="row-reverse">
                    <img
                        src="./images/hero_bg_img_homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.webp"
                        alt="hero background"
                        width="45%"
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
