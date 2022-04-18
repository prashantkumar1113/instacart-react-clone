import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

export default function Stores() {
    let storeList = ["ALDI", "Mariano's", "Jewel-Osco"];

    const renderStoreList = storeList.map((store, i) => {
        return (
            <Paper
                key={i}
                elevation={4}
                sx={{
                    textAlign: "left",
                    height: 60,
                }}
            >
                {store}
            </Paper>
        );
    });

    return (
        <Container>
            <Box sx={{textAlign: "center"}}>
                <h1>Choose your store in Chicago</h1>
                {renderStoreList}
                <h3>Show All</h3>
            </Box>
        </Container>
    );
}
