import React, { useState } from "react";
import Question from "./Question";
import Answer from "./Answer";
import world_geography from "../../db/world_geography";
import human_anatomy from "../../db/human_anatomy";

const questionBank = [...world_geography, ...human_anatomy];
// Shuffle the questions
const shuffledQuestionBank = questionBank.sort(() => Math.random() - 0.5);

function QuizBoard() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div className="quizboard">
      <Question
        setCurrentQuestion={setCurrentQuestion}
        currentQuestion={currentQuestion}
        questionBank={shuffledQuestionBank}
      />
      <Answer
        setCurrentQuestion={setCurrentQuestion}
        currentQuestion={currentQuestion}
        questionBank={shuffledQuestionBank}
      />
    </div>
  );
}

export default QuizBoard;
