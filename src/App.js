// import logo from './logo.svg';
import React from "react";
import './App.css';
import Home from "./views/home/home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';

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
