import React from 'react';

function Header(){
    return(
        <div>
            <div className="container-fluid  d-flex justify-content-center  mt-5" style={{height:"70vh"}}>
            <div className="row" style={{display:"flex", width:"100%" , justifyContent:"center", alignItems:"center"}}>
              <div className="col-md-6 ">
                <h1>DSC PCCOE </h1>
                <p>A community of Developers, Designers and Programmers who grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.

                </p>
              </div>
              <div className="col-md-6  " >
              
                <lottie-player className="mr-5 " src="https://assets8.lottiefiles.com/packages/lf20_atgjqorh.json"  background="transparent"  speed="1.5"  style={{width:"100%", height : 'auto'}}  loop  autoplay></lottie-player>
              
              </div>
            </div>
          </div>
        </div>
    )
}
export default Header;