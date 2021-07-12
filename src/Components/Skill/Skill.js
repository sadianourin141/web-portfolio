import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Skill.css';

const Skill = () => {
    return (
        <div className="skill container">
            <h5 style={{color:"white",marginBottom:"50px",marginTop:"50px"}}>I have learned so many things about web development as i have a strong interest in html,css,reacts.not only that from the begining of my varsity life i have participated in many robotics competition & 3D model designing certification exam.</h5>
            <h3 style={{backgroundColor:"white",border:"solid wheat 4px",boxShadow:" gray 3px 5px 8px"}}>Solidworks</h3>
            <ProgressBar animated now={80} />
            <h3 style={{backgroundColor:"white" ,border:"solid wheat 4px",boxShadow:" gray 3px 5px 8px"}}>Html,Css,Bootstrap</h3>
            <ProgressBar animated now={95} />
            <h3 style={{backgroundColor:"white",border:"solid wheat 4px",boxShadow:" gray 3px 5px 8px"}}>React/javascript</h3>
            <ProgressBar animated now={70} />
            <h3 style={{backgroundColor:"white" ,border:"solid wheat 4px",boxShadow:" gray 3px 5px 8px"}}>Microsoft office</h3>
            <ProgressBar animated now={80} />
            <h3 style={{backgroundColor:"white" ,border:"solid wheat 4px",boxShadow:" gray 3px 5px 8px"}}>Arduino Tinkercad Simulation</h3>
            <ProgressBar animated now={75} />
            <h3 style={{backgroundColor:"white" ,border:"solid wheat 4px",boxShadow:" gray 3px 5px 8px"}}>Illustration</h3>
            <ProgressBar animated now={30} />
            <h3 style={{backgroundColor:"white" ,border:"solid wheat 4px",boxShadow:" gray 3px 5px 8px"}}>Python</h3>
            <ProgressBar animated now={40} />
            <h3 style={{backgroundColor:"white" ,border:"solid wheat 4px",boxShadow:" gray 3px 5px 8px"}}>C,Fortran</h3>
            <ProgressBar animated now={60} />
            <h3 style={{backgroundColor:"white",border:"solid wheat 4px",boxShadow:" gray 3px 5px 8px"}}>Photo/Video Editing</h3>
            <ProgressBar animated now={30} />
            <h3 style={{backgroundColor:"white" ,border:"solid wheat 4px",boxShadow:" gray 3px 5px 8px"}}>Matlab</h3>
            <ProgressBar animated now={30} />
        </div>
    );
};

export default Skill;