import React from 'react';
import "./header.css";
import Logo from "../../assets/images/Layer_1.svg";
import Menu from "../menu/menu";

const Header = () => {

    return (
        <div className={'ebeyonds-container header fixed-top'}>
            <div className={' header-inner'}>
                <div className={' logo-container'}>
                    <img src={Logo} alt="Logo"/>
                </div>
                <div className={' menu-container'}>
                    <Menu/>
                </div>
            </div>
            <img src="" alt=""/>
        </div>
    )

}

export default Header;
