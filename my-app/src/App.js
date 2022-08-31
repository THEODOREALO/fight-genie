import Navbar from "./components/navbar";

import React from "react";
import LandingPage from "./components/landing-page";
import HomePage from "./components/home-page";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App(){


    return(
      <Router>
        <div>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/home" element={<HomePage/>} />
          </Routes>

      </div>
      </Router>
      
    )
  
}



export default App;
