import React from 'react';
import './App.css';
import Home from './Home'
import About from './About'
import Navbar from './Navbar'
import SideBar from "./Sidebar";
import Contact from './Contact'
import { Switch, Route } from "react-router-dom"
import SimpleReactLightbox from "simple-react-lightbox"; // Import Simple React Lightbox


function App() {
  return (
    <div className="App">
      <Navbar />
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <SimpleReactLightbox >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      </SimpleReactLightbox>
    </div>
  );
}

export default App;
