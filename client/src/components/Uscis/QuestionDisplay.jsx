import React from "react";

function QuestionDisplay({ usCitizenshipQuestions, currentQuestion }) {
  return (
    <div className="questionDisplay">
      {usCitizenshipQuestions[currentQuestion].question}
    </div>
  );
}

export default QuestionDisplay;
