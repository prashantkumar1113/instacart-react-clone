import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/MenuRounded";

export default function Navbar() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar
                position="static"
                sx={{
                    boxShadow: "none",
                }}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 0}}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{flexGrow: 1}}>
                        <img
                            src="./images/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg"
                            alt="instacart logo"
                        />
                    </Box>
                    {/* <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        News
                    </Typography> */}
                    <Button
                        color="inherit"
                        sx={{
                            textTransform: "none",
                            borderRadius: "20px",
                            boxShadow: "none",
                            fontSize: "1.1em",
                        }}
                    >
                        Log in
                    </Button>
                    <Button
                        color="secondary"
                        variant="contained"
                        sx={{
                            textTransform: "none",
                            borderRadius: "20px",
                            boxShadow: "none",
                            fontSize: "1.1em",
                        }}
                    >
                        Sign Up
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
