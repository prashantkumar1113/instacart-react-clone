import React from "react";
import {Box, Container, Paper, Grid} from "@mui/material";

export default function Stores() {
    let storeList = [
        {name: "ALDI", text: "Delivery by 3:30pm"},
        {name: "Mariano's", text: "Delivery by 2:30pm"},
        {name: "Jewel-Osco", text: "Delivery by 1:30pm"},
        {name: "HMard", text: "Delivery by 3:45PM"},
        {name: "Plum Markset", text: "Delivery by 11:30am"},
        {name: "Eataly", text: "Delivery by 1pm"},
    ];

    const renderStoreList = storeList.map((store, i) => {
        return (
            <Grid item xs={4}>
                <Paper
                    key={i}
                    elevation={4}
                    sx={{
                        textAlign: "left",
                    }}
                >
                    <h4>{store.name}</h4>
                    <br />
                    {store.text}
                </Paper>
            </Grid>
        );
    });

    return (
        <Container>
            <Box sx={{textAlign: "center"}}>
                <h1>Choose your store in Chicago</h1>
                <Grid container spacing={2}>
                    {renderStoreList}
                </Grid>
                <h3>Show All</h3>
            </Box>
        </Container>
    );
}
