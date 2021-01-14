import React from 'react';
import './App.css';
import '../src/css/main.scss';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
// import About from './components/AboutUs';
import Team from './components/Team';
import Home from './components/Home';
import Blog from './components/main';
import Footer from './components/Footer';
import Videos from './components/Videos';
import Connect from './components/Connect';
import Events from './components/Events';

function App() {
  return(
    <div >
      <Navbar/>
      <Switch>
      
      
      <Route exact path="/team" component={Team} />
      <Route exact path="/projects" component={Blog}/>
      <Route exact path="/events" component = {Events}/>
      <Route exact path="/videos" component = {Videos}/>
      <Route exact path="/connect" component = {Connect}/>
      <Route exact path="/" component={Home} />
      </Switch>
      <Footer/>
      
    </div>
  )
}
// example click handler for menu items


export default App;
