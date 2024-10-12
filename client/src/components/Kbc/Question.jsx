import React from "react";
import world_geography from "../../db/world_geography";
import human_anatomy from "../../db/human_anatomy";

const questionBank = [...world_geography, ...human_anatomy];

function Question({ currentQuestion, setCurrentQuestion }) {
  return (
    <div className="question">{questionBank[currentQuestion].question}</div>
  );
}

export default Question;
