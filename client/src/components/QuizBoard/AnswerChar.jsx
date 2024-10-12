import React from "react";

function AnswerChar({ char, currentChar, indexOfChar, alreadyPicked }) {
  return (
    <div
      className={`${
        indexOfChar === currentChar || alreadyPicked.includes(indexOfChar)
          ? "char uncover-char"
          : "char cover-char"
      } ${char === " " || char === "." ? "spaceCharacter" : ""}`}
    >
      {char}
    </div>
  );
}

export default AnswerChar;
