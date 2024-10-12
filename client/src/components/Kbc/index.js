import React, { useState } from "react";
import Question from "./Question";
import OptionsArea from "./OptionsArea";

function Kbc() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div className="kbc">
      <Question
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
      />
      <OptionsArea
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
      />
    </div>
  );
}

export default Kbc;
