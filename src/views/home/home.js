import React from 'react';
import "./home.css";
import Banner from "../../assets/images/banner.png";
import Bannertwo from "../../assets/images/bannertwo.jpg";
import Reach from "../../components/reach/reach";
import Films from "../../components/films/films";

const Home = () => {

    return (
        <div className={'home'}>


            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Banner} className={'main-banner'} alt="Movie thetor"/>
                    </div>
                    <div className="carousel-item">
                        <img src={Bannertwo} className={'main-banner'} alt="Movie thetor"/>

                    </div>

                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    {/*<span className="sr-only">Previous</span>*/}
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    {/*<span className="sr-only">Next</span>*/}
                </a>
            </div>


            {/*<img src={Banner} className={'main-banner'} alt="Movie thetor"/>*/}
            <div className={'main-explanation ebeyonds-container'}>
                <h1 className={'main-explanation-title'}>MOVIE LIBRARY </h1>
                <p className={'main-explanation-description'}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua. </p>
            </div>
            <div className={'films ebeyonds-container'}>
                <Films/>
            </div>
            <div className={' ebeyonds-container reach'}>
                <Reach/>
            </div>
        </div>
    )

}

export default Home;
