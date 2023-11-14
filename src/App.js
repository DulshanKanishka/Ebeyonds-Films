import React from "react";
import './App.css';
import Home from "./views/home/home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {

    return (
            <div className="App">
                {/*<header className="App-header">*/}
                <Header/>
                <Home/>
                <Footer/>
            </div>
    );
}

export default App;
