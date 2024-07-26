import Header from "./Header";
import Hangman from "./Hangman";
import Word from "./Word";
import Keyboard from "./Keyboard";
import { useState } from "react";

export default function Game({ setPage, setHighScore }) {
  const word = "winner";
  const correctChars = word.toUpperCase().split("");
  const [hangState, setHangState] = useState(1);
  const [correctLetters, setCorrectLetters] = useState(correctChars);
  const [currentScore, setCurrentScore] = useState(0);

  return (
    <>
      <Header setPage={setPage} currentScore={currentScore} />
      <Hangman hangState={hangState} />
      <Word correctLetters={correctLetters} />
      <Keyboard
        correctLetters={correctLetters}
        setCorrectLetters={setCorrectLetters}
      />
    </>
  );
}
