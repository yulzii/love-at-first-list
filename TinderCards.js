import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { database, auth } from "./firebase";
import "./TinderCards.css";


const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);


  return (
    <div>
      <div className="tinderCards_cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            id="removeCard"
            onSwipe={(direction) => {
              if (direction == "right") {
                let user = auth.currentUser;
              }
            }}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
        
      </div>
    </div>
  );
};

export default TinderCards;

