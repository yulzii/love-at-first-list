import React from "react";
import Header from "../Header";
import SwipeButton from "../SwipeButtons";
import TinderCards from "../TinderCards";
import "./Home.css";
function Home() {
    return (
        <div className="homeScreen">
            <div>
                <Header />
            </div>
              
            <div>
                <TinderCards />
            </div>
            <div>
                <SwipeButton />
            </div>
            
        </div>
        
    )
}

export default Home;