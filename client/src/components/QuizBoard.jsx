import React, { useState } from "react";
import Question from "./Question";
import Answer from "./Answer";
import "./index.css";

function QuizBoard() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div className="quizboard">
      <Question
        setCurrentQuestion={setCurrentQuestion}
        currentQuestion={currentQuestion}
      />
      <Answer
        setCurrentQuestion={setCurrentQuestion}
        currentQuestion={currentQuestion}
      />
    </div>
  );
}

export default QuizBoard;
