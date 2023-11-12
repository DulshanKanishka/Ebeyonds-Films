// import logo from './logo.svg';
import './App.css';
import Home from "./views/home/home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import React from "react";

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
