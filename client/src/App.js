import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Home'
import About from './About'
import Navbar from './Navbar'
import SideBar from "./Sidebar";
import Contact from './Contact'
import Loading from './components/Loading'
import { Switch, Route } from "react-router-dom"
import SimpleReactLightbox from "simple-react-lightbox"; // Import Simple React Lightbox


function App() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  })

  return (
    < div className="App" >

      {isLoading == true ?
        <Loading />
        :
        <div>
          <Navbar />
          <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
          <SimpleReactLightbox >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </SimpleReactLightbox>
        </div>

      }

    </div >
  );
}

export default App;
