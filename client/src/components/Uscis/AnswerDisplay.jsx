import React, { useEffect, useState } from "react";

function AnswerDisplay({
  currentQuestion,
  usCitizenshipQuestions,
  setCurrentQuestion,
}) {
  const [displayAnswer, setDisplayAnswer] = useState(false);

  // When component mounts, play the audio
  useEffect(() => {
    const audioUrl =
      usCitizenshipQuestions[currentQuestion].questionAnswerAudio +
      "?t=" +
      new Date().getTime();
    const newAudio = new Audio(audioUrl);

    const handleCanPlayThrough = () => {
      newAudio.play().catch((error) => {
        console.error("Autoplay failed:", error);
      });
    };

    const handleAudioEnded = () => {
      console.log("Audio has ended");
      // wait 1 second before displaying the answer
      setTimeout(() => {
        // Set the next question, if it is the last question, set it to 0
        setCurrentQuestion(
          currentQuestion === usCitizenshipQuestions.length - 1
            ? 0
            : currentQuestion + 1
        );
        setDisplayAnswer(false);
      }, 3000);
    };

    newAudio.addEventListener("canplaythrough", handleCanPlayThrough);
    newAudio.addEventListener("ended", handleAudioEnded);

    return () => {
      newAudio.removeEventListener("canplaythrough", handleCanPlayThrough);
      newAudio.removeEventListener("ended", handleAudioEnded);
    };
  }, [currentQuestion, setCurrentQuestion, usCitizenshipQuestions]);

  // Display the correct answer after 2 seconds delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayAnswer(true);
    }, usCitizenshipQuestions[currentQuestion].questionAudioLength);

    return () => {
      clearTimeout(timeout);
    };
  }, [usCitizenshipQuestions, currentQuestion]);

  return (
    <div className="answerDisplay">
      <div>
        {displayAnswer &&
          usCitizenshipQuestions[currentQuestion].correctAnswer.map(
            (answer) => {
              return (
                <div className="answerLines" key={answer}>
                  {answer}
                </div>
              );
            }
          )}
      </div>
    </div>
  );
}

export default AnswerDisplay;
