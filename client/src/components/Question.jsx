import React from "react";
import "./index.css";
import questionBank from "../db/questionBank";

function Question({ currentQuestion, setCurrentQuestion }) {
  return (
    <div className="question">{questionBank[currentQuestion].question}</div>
  );
}

export default Question;
