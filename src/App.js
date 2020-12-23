// import logo from './logo.svg';
import React from 'react';
import './App.css';
import './main.scss'
// import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Team from './components/Team';
function App() {
  return(
    <div>
      <Navbar/>
      <Header />
      <Team />
    </div>
  )
}
// example click handler for menu items


export default App;
