import React, {useState} from 'react';
import "./menu.css";
import MenuIcon from '@mui/icons-material/Menu';

const Menu = () => {
    const [activeMenuItem, setActiveMenuItem] = useState('');

    const handleMenuItemClick = (itemName) => {
        setActiveMenuItem(itemName);
    };
    return (
        <div className={''}>
            <div className={'desktop-menu'}>
                <nav className="navbar navbar-dark ">
                    <div className="container-fluid padding-zero">
                        <ul className="nav justify-content-end desctop-menu-item-holder">
                            <li className={activeMenuItem === 'HOME' ? 'nav-item desctop-menu-item active' : 'nav-item desctop-menu-item'}>
                                <a className="nav-link active desctop-menu-item-inner"
                                   onClick={() => handleMenuItemClick('HOME')} aria-current="page" href="#">HOME</a>
                                <hr/>
                            </li>
                            <li className={activeMenuItem === 'screen' ? 'nav-item desctop-menu-item active' : 'nav-item desctop-menu-item'}>
                                <a className="nav-link desctop-menu-item-inner"
                                   onClick={() => handleMenuItemClick('screen')} href="#carouselExampleControls">OUR SCREENS</a>
                                <hr/>
                            </li>
                            <li className={activeMenuItem === 'schedule' ? 'nav-item desctop-menu-item active' : 'nav-item desctop-menu-item'}>
                                <a className="nav-link desctop-menu-item-inner"
                                   onClick={() => handleMenuItemClick('schedule')} href="#reach">SCHEDULE</a>
                                <hr/>
                            </li>
                            <li className={activeMenuItem === 'library' ? 'nav-item desctop-menu-item active' : 'nav-item desctop-menu-item'}>
                                <a className="nav-link desctop-menu-item-inner"
                                   onClick={() => handleMenuItemClick('library')} href="#films">MOVIE LIBRARY</a>
                                <hr/>
                            </li>
                            <li className={activeMenuItem === 'contact' ? 'nav-item desctop-menu-item hidden-on-tab active' : 'nav-item  hidden-on-tab desctop-menu-item'}>
                                <a className="nav-link desctop-menu-item-inner"
                                   onClick={() => handleMenuItemClick('contact')} href="#reach">LOCATION & CONTACT</a>
                                <hr/>
                            </li>
                            <li className={activeMenuItem === 'menuu' ? 'nav-item desctop-menu-item active' : 'nav-item desctop-menu-item'}>
                                <button className="navbar-toggler mobile-menu-btn" type="button">
                                    <MenuIcon/>
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            {/*<nav className="navbar navbar-dark bg-dark fixed-top main-menu-mobile">*/}
            <nav className="navbar navbar-dark main-menu-mobile">
                <div className="container-fluid mobile-padding-zero">
                    {/*<a className="navbar-brand" href="#">Offcanvas dark navbar</a>*/}
                    <button className="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        {/*<span className="navbar-toggler-icon"></span>*/}
                        <MenuIcon/>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar"
                         aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Ebeyonds</h5>
                            <button type="button" className="btn-close btn-close-white navbar-toggler-icon"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="#carouselExampleControls">OUR SCREENS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="#reach">SCHEDULE</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="#films">MOVIE LIBRARY</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="#reach">LOCATION & CONTACT</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Menu;
