import React from "react";

function Option({ option, revelAnswer, correctAnswer }) {
  return (
    <div
      className={`${
        correctAnswer === option ? "option correct-option" : "option"
      }`}
    >
      {option}
    </div>
  );
}

export default Option;
