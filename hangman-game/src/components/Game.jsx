import Header from "./Header";
import Hangman from "./Hangman";
import Word from "./Word";
import Keyboard from "./Keyboard";
import GameOver from "./GameOver";
import GameWon from "./GameWon";

import { useState } from "react";

export default function Game({
  letters,
  setPage,
  frame,
  setFrame,
  currentScore,
  setCurrentScore,
  highScores,
  setHighScores,
  gameStatus,
  setGameStatus,
}) {
  const [guessedLetters, setGuessedLetters] = useState([]);

  function handleGuess(pressedKey) {
    const uniqueLetters = [...new Set(letters)];

    const updatedGuessedLetters = [...guessedLetters];

    if (letters.includes(pressedKey)) {
      setCurrentScore((previousScore) => previousScore + 10);
      updatedGuessedLetters.push(pressedKey);
      setGuessedLetters(updatedGuessedLetters);
    }

    if (uniqueLetters.length === updatedGuessedLetters.length) {
      setGameStatus("game-won");
      updateHighScores(currentScore + 10);
    }

    if (!letters.includes(pressedKey)) {
      setCurrentScore((previousScore) => previousScore - 5);

      setFrame((currentFrame) => {
        const updatedFrame = currentFrame + 1;
        if (updatedFrame === 10) {
          setGameStatus("game-over");
        }
        return updatedFrame;
      });
    }
  }

  function updateHighScores(newScore) {
    const updatedHighScores = [...highScores, newScore];
    updatedHighScores.sort((a, b) => b - a);
    setHighScores(updatedHighScores.slice(0, 10));
  }

  return (
    <section className="game">
      <Header setPage={setPage} currentScore={currentScore} />
      <Hangman frame={frame} />
      <Word letters={letters} guessedLetters={guessedLetters} />
      <Keyboard letters={letters} handleGuess={handleGuess} />
      {gameStatus === "game-won" && (
        <GameWon
          setPage={setPage}
          currentScore={currentScore}
          highScores={highScores}
        />
      )}
      {gameStatus === "game-over" && (
        <GameOver setPage={setPage} currentScore={currentScore} />
      )}
    </section>
  );
}
