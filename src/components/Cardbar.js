import React from "react";
import {Box, Container, Grid} from "@mui/material";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {Button, CardActionArea, CardActions} from "@mui/material";

export default function Cardbar() {
    const cardArray = [
        {
            title: "Choose what you want",
            text: "Select items from your favorite grocery stores at Instacart.com or in the app.",
            img: "./images/how_it_works-163dcc1c8f91c63d7b0bdb648b5370a89267d54c8cb90bd858495395b8a9e5f3.webp",
        },
        {
            title: "See real-time updates",
            text: "Personal shoppers pick items with care. Chat as they shop and manage your order.",
            img: "./images/real_time_updates-8330ec94f4d8006c6732bb2f65141e3596dcd3be02b0bf0376dcf5e2895fe37e.webp",
        },
        {
            title: "Get your items same-day",
            text: "Pick a convenient time for you. Enjoy Instacart’s 100% quality guarantee on every order.",
            img: "./images/same_day_delivery-a00a9a59cbdfc41e7449cbdd04c12d27303284bef1a8fe957ec2a0112a70d7e7.webp",
        },
    ];

    const renderCards = cardArray.map((card) => {
        return (
            <Grid item xs={4}>
                <Card sx={{bgcolor: "#F6F7F8", maxWidth: 345}}>
                    <CardActionArea>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h4"
                                component="div"
                            >
                                {card.title}
                            </Typography>
                            <br />
                            <Typography variant="h6" color="text.secondary">
                                {card.text}
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                    <CardMedia
                        component="img"
                        height="240"
                        image={card.img}
                        alt="Choose what you wnat"
                    />
                </Card>
            </Grid>
        );
    });

    return (
        <Container>
            <Box sx={{textAlign: "center"}}>
                <h1>Grocery delivery you can count on</h1>
            </Box>
            <Grid container spacing={2}>
                {renderCards}
            </Grid>

            <br />
            <br />
        </Container>
    );
}
