import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Herobar() {
    return (
        <Box sx={{bgcolor: "#DEECD6", height: 250}}>
            <Container>
                <h1>Order groceries for delivery or pickup today</h1>
                <p>
                    Whatever you want from local stores, brought right to your
                    door.
                </p>
            </Container>
        </Box>
    );
}
