import React, { useState, useEffect } from "react";
import "../../App.css";
import "./Goals.css";
import Footer from "../Footer";

function Goals() {
  const [goalNumber, setGoalNumber] = useState(0);
  const goalsArray = ["GOALS", "Front-End Developer", "Back-End Developer", "Full-Stack Developer"];

  useEffect(() => {
    const eleGoals = document.querySelector(".goals");

    eleGoals.addEventListener("click", (event) => {
      setGoalNumber((prevGoalNumber) => prevGoalNumber + 1);
      console.debug("Goal Clicked!");
    });
  }, []);
  // if (eleGoals && goalNumber === 0) {
  //   eleGoals.addEventListener("click", (event) => {
  //     setGoalNumber((prevGoalNumber) => prevGoalNumber + 1);
  //     console.log("Goal Clicked!");
  //   });
  // }

  return (
    <div>
      <h1 className="goals">{goalsArray[goalNumber % 4]}</h1>
      <Footer />
    </div>
  );
}

export default Goals;
