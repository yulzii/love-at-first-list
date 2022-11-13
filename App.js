import React from "react";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import "./pages/Home.css";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="App">
      <Router>  
        <Routes>
           
            <Route path = "/" element={<Home />}/>
            <Route path = "/login" element = {<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;