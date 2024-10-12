import React, { useEffect, useState } from "react";
import Option from "./Option";

function OptionsArea({ currentQuestion, questionBank }) {
  // States
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [revelAnswer, setRevelAnswer] = useState(false);

  useEffect(() => {
    setOptions(questionBank[currentQuestion].options);
    setCorrectAnswer(questionBank[currentQuestion].correctAnswer);

    if (currentQuestion) {
      setTimeout(() => {
        setRevelAnswer(true);
      }, 5000);
    }

    //Clean up
    return () => {
      setOptions([]);
      setCorrectAnswer(null);
      setRevelAnswer(false);
    };
  }, [currentQuestion, questionBank]);

  return (
    <div className="optionsArea">
      {options.map((o) => {
        return (
          <Option
            option={o}
            correctAnswer={correctAnswer}
            revelAnswer={revelAnswer}
          />
        );
      })}
    </div>
  );
}

export default OptionsArea;
