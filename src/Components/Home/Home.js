import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {ImGrin} from "react-icons/im";

import './Home.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Home = () => {
    return (
        <div>
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("https://i.ibb.co/MCjbs2T/IMG-mim.jpg")` }} className="header">
      
        <Navbar collapseOnSelect expand="lg"variant="dark" >
        <div className="font2" >
              
              <h4 style={{color:"white"}}><span style={{color:"salmon"}}>S</span><span style={{color:"cyan"}}>a</span><span  style={{color:"blue"}}>d</span><span  style={{color:"pink"}}>i</span><span  style={{color:"yellow"}}>a </span><ImGrin/></h4>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
     
     
    </Nav>

         
      
   
   <Nav className="nav">
   
  


               <ul>
                 
                   <li>
                       <Link to="/home">Home</Link>
                   </li>
                   <li>
                       <Link to="/skill">Skill</Link>
                   </li>
                   <li>
                       <Link to="/experience">Experience</Link>
                   </li>
                   <li>
                       <Link to="/projects">Projects</Link>
                   </li>

                   <li>
                       <Link className="btn-book" to="/about-me">About me</Link>
                   </li>
                   <li>
                       <Link to="/contact">Contact</Link>
                   </li>
               </ul>
               
               
           </Nav>
           </Navbar.Collapse>

          
        
           </Navbar>
      </div> 
         

   
    
 

  </div>
        
    
    );
};

export default Home;

//https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZ3JhbW1lcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60