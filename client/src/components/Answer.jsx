/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import AnswerChar from "./AnswerChar";
import questionBank from "../db/questionBank";

function Answer({ currentQuestion, setCurrentQuestion }) {
  const [currentChar, setCurrentChar] = useState(null);
  const [answerArray, setAnswerArray] = useState([]);
  const [alreadyPicked, setAlreadyPicked] = useState([]);

  useEffect(() => {
    // Initialize answer arrays when current question changes
    const constantAnswerArray =
      questionBank[currentQuestion].correctAnswer.split("");
    let remaining = [...constantAnswerArray];

    setAnswerArray([...constantAnswerArray]);
    setAlreadyPicked([]);

    // Function to pick random letters with a delay
    const interval = setInterval(() => {
      if (remaining.length === 0) {
        clearInterval(interval);
        // set all valeus to initial values after the delay
        setAlreadyPicked([]);
        setAnswerArray([]);
        setCurrentChar(null);
        if (currentQuestion === questionBank.length - 1) {
          setCurrentQuestion(0);
        } else {
          setCurrentQuestion((prevState) => prevState + 1);
        }
        return;
      }

      // Pick random index from remaining array
      const randomIndex = Math.floor(Math.random() * remaining.length);
      const itemInRandomIndex = remaining[randomIndex]; // letter
      // console.log("Item in random index: ", itemInRandomIndex);

      const itemIndexInConstantAnswerArray =
        constantAnswerArray.indexOf(itemInRandomIndex); // number
      console.log(
        "Item index in constant answer array: ",
        itemIndexInConstantAnswerArray
      );

      // Update state
      setCurrentChar(itemIndexInConstantAnswerArray);
      setAlreadyPicked((prevState) => [
        ...prevState,
        itemIndexInConstantAnswerArray,
      ]);

      // Remove the first instance of picked item from remaining array
      const indexInRemaining = remaining.indexOf(itemInRandomIndex);
      remaining.splice(indexInRemaining, 1);

      // replace the itemInRandomIndex with %%
      constantAnswerArray[itemIndexInConstantAnswerArray] = "%%";
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentQuestion]);

  return (
    <div className="answer">
      {answerArray.map((char, index) => (
        <AnswerChar
          key={index}
          char={char}
          currentChar={currentChar}
          indexOfChar={index}
          alreadyPicked={alreadyPicked}
        />
      ))}
    </div>
  );
}

export default Answer;
