import React from 'react';
import "./About.css";
import Button from 'react-bootstrap/Button';

import img from './mim.jpg';



const About = () => {
    return (
        <div className="about">
           <div class="container">
  <div class="row">
    <div class="col-md-6"><img src={img} alt="" /></div>
    <div class="col-md-4 ms-auto intro" > <h1 className="font2">Hi! I'm <span style={{color:"salmon",fontSize:"28px"}}>Sadia Nourin Mim</span></h1>
    <p className="font">I am a student and I am also a junior web developper.I am still in a learning stage.<br/>I have great interest in html,css,bootstrap,react,js.
                I am also enjoy playing with robotics instruments like Arduino,sensor,motor driver,bluetooth module etc.Im good at 3D model designing(Solidwork),animation,video Editing,Cad simulation.
            </p>
            <Button variant="outline-light">Download CV</Button>
    
    </div>
  </div>
  </div>



        </div>
    );
};

export default About;