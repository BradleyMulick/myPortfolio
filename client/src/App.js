import React from 'react';
import './App.css';
import Home from './Home'
import About from './About'
import Navbar from './Navbar'
import SideBar from "./Sidebar";
import { Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
