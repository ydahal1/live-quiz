import React from "react";

function QuestionDisplay({ usCitizenshipQuestions, currentQuestion }) {
  return (
    <div className="questionDisplay">
      <span>
        <span className="numberCount">
          {usCitizenshipQuestions[currentQuestion].id}.
        </span>
        {usCitizenshipQuestions[currentQuestion].question}
      </span>
    </div>
  );
}

export default QuestionDisplay;
