import React, { useState } from "react";
import Question from "./Question";
import Answer from "./Answer";
import world_geography from "../../db/world_geography";
import human_anatomy from "../../db/human_anatomy";

const questionBank = [...world_geography, ...human_anatomy];
// Shuffle the questions
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffledQuestionBank = shuffleArray([...questionBank]);
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
