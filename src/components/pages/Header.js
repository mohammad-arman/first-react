import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/header.css';
import welcomebg from '../assets/images/home-bg.jpg';
import logo from '../assets/images/logo.png';
import features from '../assets/images/features_thumb.png';

function Header() {
    return (
        <header className="welcome" style={ {backgroundImage:`url(${welcomebg})`} }>
            <div className="logo">
                <Link>
                    <img src={logo} alt=""/>
                </Link>
            </div>
            <div className="content-area">
                <div className="wrapper">
                    <div className="we-row">
                        <div className="we-col-5">
                            <div className="content">
                                <h3>Want to make your device safe?</h3>
                                <h1>The Best Pizza landing page for Pizza showcase</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut</p>
                            </div>
                            <div className="btn">
                   
                         <Link>
                         <button className="btn1">view our services</button>
                         </Link>
                            <Link>
                            <button className="btn2">view our menu</button>
                            </Link>
                    </div>
                        </div>
                        <div className="we-col-7 text-right">
                            <div className="shape-image">
                                <img src={features} alt=""/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
