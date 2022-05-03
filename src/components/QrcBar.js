import React from "react";
import {Box, Container, Grid} from "@mui/material";

export default function Herobar() {
    return (
        <Container>
            <Box sx={{bgcolor: "#B1E4D5", height: 120}}>
                {/* <img
                    src="./images/QR_code_left-d5860cb8e299f89f4a14b7f556d11052dc21f59d54fdd69e2b2154538fc31946.webp"
                    alt="QRCode left"
                /> */}
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <img
                            src="./images/QR_code_left-d5860cb8e299f89f4a14b7f556d11052dc21f59d54fdd69e2b2154538fc31946.webp"
                            alt="qrcode"
                            width="80%"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <h2>Get the full Instacart experience</h2>
                        <p>
                            Scan the QR code with your camera. First delivery is
                            free.
                        </p>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid container direction="row-reverse">
                            <img
                                src="./images/download.png"
                                alt="QRCode left"
                                width="40%"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
