import React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Navbar from "./components/Navbar";
import Herobar from "./components/Herobar";
import "./App.css";

function App() {
    const theme = createTheme({
        palette: {
            primary: {
                // Purple and green play nicely together.
                main: "#ffffff",
            },
            secondary: {
                // This is green.A700 as hex.
                main: "#08AC0A",
            },
        },
    });

    return (
        <div className="App">
            {/* 
        <navbar>
        <herobar>
        <qrbar>
        <chooseStores>
        <cardbar>
      */}
            <ThemeProvider theme={theme}>
                <Navbar />
                <Herobar />
            </ThemeProvider>
        </div>
    );
}

export default App;
