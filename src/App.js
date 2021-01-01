// import logo from './logo.svg';
import React from 'react';
import './App.css';
import '../src/css/main.scss';
import { Route, Switch, Redirect } from "react-router-dom";
// import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import Navbar from './components/Navbar';
import About from './components/AboutUs';
import Team from './components/Team';
import Home from './components/Home';
import Blog from './components/main';
import Footer from './components/Footer';
import Projects from './components/Projects';
function App() {
  return(
    <div >
      <Navbar/>
      <Switch>
      
      <Route exact path="/" component={Home} />
      <Route exact path="/team" component={Team} />
      <Route exact path="/projects" component={Blog}/>
      
      </Switch>
      <Footer/>
      
    </div>
  )
}
// example click handler for menu items


export default App;
