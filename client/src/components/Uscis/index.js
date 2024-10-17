import React, { useState } from "react";
import QuestionDisplay from "./QuestionDisplay";
import AnswerDisplay from "./AnswerDisplay";
import usCitizenshipQuestions from "../../db/us_citizenship";

function Uscis() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div className="uscis">
      <QuestionDisplay
        usCitizenshipQuestions={usCitizenshipQuestions}
        currentQuestion={currentQuestion}
      />
      <AnswerDisplay
        usCitizenshipQuestions={usCitizenshipQuestions}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
      />
    </div>
  );
}

export default Uscis;
