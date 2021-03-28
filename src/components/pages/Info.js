import React from 'react';
import '../assets/css/info.css';
import infobg from '../assets/images/facts-bg.jpg';
import infoman from '../assets/images/explain-img.png';

function Info() {
    return (
       <section className="info section-pad" style={{backgroundImage:`url(${infobg})`}}>
           <div className="wrapper">
               <div className="info-area we-row">
                   <div className="we-col-6">
                       <img src={infoman} alt=""/>
                   </div>
                   <div className="we-col-6">
                       <div className="info-ctn">
                           <h3>A modern and unique style</h3>
                           <h2>Important facts</h2>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat. Duis aute irure dolor in rep rehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                       </div>
                       <div className="we-row">
                           <div className="we-col-6">
                                <div className="single">
                                    <h2>56+</h2>
                                    <p>Chef</p>
                                </div>
                           </div>
                           <div className="we-col-6">
                                <div className="single">
                                    <h2>500+</h2>
                                    <p>Reviews</p>
                                </div>
                           </div>
                           <a className="btn" href="#">Read More</a>
                       </div>
                   </div>
               </div>
           </div>
       </section> 
    )
}

export default Info
