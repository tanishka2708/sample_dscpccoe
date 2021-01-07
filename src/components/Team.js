import React from 'react'
import '../css/style.css';
function Team() {
    return (
        <div className="">
            
        <div className="container container-fluid " >
            <div className="card">
                <div className="content">
                    <div className="imgBx">
                        <img src="https://i.picsum.photos/id/43/200/300.jpg?hmac=F_cVhLISpNmZ9wjirHfMJgX9rQzMYJbJE1xzfwmV36c" ></img>
                    </div>
                        <div className="contentBx">
                            <h3>Someone Famous<br/><span>Creative Designer</span>
                            </h3>
                        </div>
                    
                </div>
                <ul className="sci">
                    <li >
                        <a href="#"><i className="fab fa-github" aria-hidden="true"></i></a>
                    </li>
                    <li >
                        <a href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
                    </li>
                    <li >
                        <a href="#" ><i className="fab fa-instagram" style={{color:"black"}}  aria-hidden="true"></i></a>
                    </li>
                </ul>
            </div>
            <div className="card">
                <div className="content">
                    <div className="imgBx">
                        <img src="https://i.picsum.photos/id/43/200/300.jpg?hmac=F_cVhLISpNmZ9wjirHfMJgX9rQzMYJbJE1xzfwmV36c" /></div>
                        <div className="contentBx">
                            <h3>Someone Famous<br/><span>Creative Designer</span></h3>
                        </div>
                    
                </div>
                <ul className="sci">
                    <li style={{"--i":"1"}}>
                        <a href="#"><i className="fab fa-github" aria-hidden="true"></i></a>
                    </li>
                    <li style={{"--i":"2"}}>
                        <a href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
                    </li>
                    <li style={{"--i":"3"}}>
                        <a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a>
                    </li>
                </ul>
            </div>
            <div className="card">
                <div className="content">
                    <div className="imgBx" >
                        <img src="https://i.picsum.photos/id/43/200/300.jpg?hmac=F_cVhLISpNmZ9wjirHfMJgX9rQzMYJbJE1xzfwmV36c" /></div>
                        <div class="contentBx">
                            <h3>Someone Famous<br/><span>Creative Designer</span></h3>
                        </div>
                    
                </div>
                <ul class="sci">
                    <li style={{"--i":"1"}}>
                        <a href="#"><i class="fab fa-github" ></i></a>
                    </li>
                    <li style={{"--i":"2"}}>
                        <a href="#"><i class="fab fa-linkedin" ></i></a>
                    </li>
                    <li style={{"--i":"3"}}>
                        <a href="#" ><i class="fab fa-instagram"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    
        </div>
    )
}

export default Team
