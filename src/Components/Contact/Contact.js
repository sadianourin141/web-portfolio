import React from 'react';
import './Contact.css';
import { ImFacebook2} from "react-icons/im";
import { ImGoogle2} from "react-icons/im";
import {ImGithub} from "react-icons/im";
import {ImWhatsapp} from "react-icons/im";
import {ImLinkedin} from "react-icons/im";
import {ImTwitter} from "react-icons/im";
import {ImInstagram} from "react-icons/im";
import { ImMail} from "react-icons/im";
import { TiSocialTwitter } from "react-icons/ti";
import {FaFacebook} from 'react-icons/fa';
import {FcPhone} from "react-icons/fc";
import { GrMail } from "react-icons/gr";
import { Row } from 'react-bootstrap';
import { Col} from 'react-bootstrap';
import {ImGrin} from "react-icons/im";




const Contact = () => {
    return (
        <div className="contact">
          <h2 style={{color:"white"}}>Contact with me <ImGrin/></h2>
         <div className="icons"><h3 className="icon"><a href="https://www.facebook.com/sadia.nourin.1481/"> <ImFacebook2/> </a></h3>
         <h3 className="icon"><a href="mailto:sadianourinmim@gmail.com"target="_blank"><ImGoogle2/></a> </h3>
         <h3 className="icon"> <a href="https://github.com/sadianourin141"target="_blank"><ImGithub/></a> </h3>
         <h3 className="icon"><ImWhatsapp/> </h3>
         <h3 className="icon"><a href="https://www.linkedin.com/in/sadia-nourin-5389851ab" target="_blank"><ImLinkedin/></a> </h3>
         <h3 className="icon"><ImTwitter/> </h3>
         <h3 className="icon"><a href="https://www.instagram.com/_.nourin_mim._"target="_blank"><ImInstagram/></a> </h3>
         <h3 className="icon"><a href="mailto:u1803141@student.cuet.ac.bd"target="_blank"><ImMail/></a> </h3>
         
         </div>
        
         <div className="black"><Row className="container"><Col className="col-md-4 alignment"><b style={{color:"white"}}>Contact Me</b><br/><h6 style={{color:"white"}}>Doulatpur,cumilla</h6><br/><h6 style={{color:"white"}}><FcPhone/>Phone:01764369557</h6><br/><h6 style={{color:"white"}}><GrMail/> Email:sadianourinmim@gmail.com</h6>
            </Col>
            <Col className="col-md-4 alignment"><b style={{color:"white"}}>Sitemap</b><br/><a style={{textDecoration:"none",color:"white"}} href="/home">Home</a><br/><a style={{textDecoration:"none",color:"white"}} href="/aboutme">About me</a><br/><a style={{textDecoration:"none",color:"white"}} href="/experience">Experience</a><br/><a style={{textDecoration:"none",color:"white"}} href="/skill">Skill</a><br/><a style={{textDecoration:"none",color:"white"}} href="/project">Project</a><br/><a style={{textDecoration:"none",color:"white"}} href="/contact">Contact</a><br/>
            </Col>
            <Col className="col-md-1"></Col>
            <Col  style={{marginTop:"80px"}}className="col-md-3"> <h6 style={{color:"white"}}>follow me on</h6> <a href="https://www.facebook.com/sadia.nourin.1481/"target="_blank"><FaFacebook/></a><br/><h6 style={{color:"white"}}>follow me on</h6><h6 style={{color:"white"}}><TiSocialTwitter/></h6></Col>
              </Row>
             <footer style={{marginTop:"100px",marginLeft:"90px",textAlign:"center",color:"blue"}}>Copyrights Ⓒ2021 All Rights Reserved by SNM</footer>
              </div>
        
          

            
        </div>
    );
};

export default Contact;