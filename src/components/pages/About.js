import React from 'react';
import '../assets/css/about.css';

function About() {
    return (
        <section className="about-area section-pad">
           <div className="wrapper">
               <div className="section-heading text-center">
                   <h3>About Pizza</h3>
                   <h2>Why do you like?</h2>
               </div>
               <div className="about we-row">
                 <div className="we-col-4">
                 <div className="single-about text-center">
                        <div className="icon-shape text-center">
                        <i class="fas fa-history"></i>
                        </div>
                        <h3>Wow animations</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut</p>
                   </div>
                 </div>
                 <div className="we-col-4">
                 <div className="single-about text-center">
                        <div className="icon-shape text-center">
                        <i class="fas fa-clone"></i>
                        </div>
                        <h3>Clean code</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut</p>
                   </div>
                 </div>
                 <div className="we-col-4">
                 <div className="single-about text-center">
                        <div className="icon-shape text-center">
                        <i class="fab fa-firefox"></i>
                        </div>
                        <h3>Free icon fonts</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut</p>
                   </div>
                 </div>  
               </div>
           </div>
        </section>
    )
}

export default About;
