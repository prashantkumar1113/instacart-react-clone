import React from "react";
import Navbar from "./components/Navbar";
import Herobar from "./components/Herobar";
import "./App.css";

function App() {
    return (
        <div className="App">
            {/* 
        <navbar>
        <herobar>
        <qrbar>
        <chooseStores>
        <cardbar>
      */}
            <Navbar />
            <Herobar />
        </div>
    );
}

export default App;
