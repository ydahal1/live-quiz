import React from "react";

function Question({ currentQuestion, questionBank }) {
  return (
    <div className="question">{questionBank[currentQuestion].question}</div>
  );
}

export default Question;
