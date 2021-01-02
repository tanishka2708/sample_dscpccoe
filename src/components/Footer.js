import React from 'react';
import Img from '../assets/logos/dscpccoe.png';
const Footer = ()=>{
    return(
        
            <div className="footer py-2 pl-1" style={{display:"flex", justifyContent:"space-evenly", alignItems:"center", backgroundColor:"#f2f2f2", minHeight:"180px"}}>
                    <div className="" style={{display:"flex"}}>
                        <img src={Img} style={{maxWidth:"450px"}}/>
                        
                    </div>
                    <div className="social-media-links">
                        <h4>Contact Us</h4>
                            <a href="https://www.facebook.com/dscpccoe/" target="_blank" style={{fontSize:"36px", color:"#106eea"}} className="mr-3 social-links"><i className="fab fa-facebook-square"></i></a>
                            <a href="https://github.com/dscpccoe" target="_blank" style={{fontSize:"36px", color:"#106eea"}} className="mx-3 social-links"><i className="fab fa-github-square"></i></a>
                            <a href="https://www.instagram.com/dscpccoe/?hl=en" target="_blank" style={{fontSize:"36px", color:"#106eea"}} className="mx-3 social-links"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/company/dsc-pccoe/" target="_blank" style={{fontSize:"36px", color:"#106eea"}} className="mx-3 social-links"><i className="fab fa-linkedin"></i></a>
                            <a href="https://twitter.com/dscpccoe?lang=en" target="_blank" style={{fontSize:"36px", color:"#106eea"}} className="mx-3 social-links"><i className="fab fa-twitter-square"></i></a>
                    </div>
            </div>
    
    )
}
export default Footer;