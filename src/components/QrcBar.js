import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Herobar() {
    return (
        <Container>
            <Box sx={{bgcolor: "#B1E4D5", height: 100}}>
                {/* <img
                    src="./images/QR_code_left-d5860cb8e299f89f4a14b7f556d11052dc21f59d54fdd69e2b2154538fc31946.webp"
                    alt="QRCode left"
                /> */}
                <h2>Get the full Instacart experience</h2>
                <p>
                    Scan the QR code with your camera. First delivery is free.
                </p>
            </Box>
        </Container>
    );
}
