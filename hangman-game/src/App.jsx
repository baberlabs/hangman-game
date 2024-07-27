import "./App.css";
import Home from "./components/Home";
import Game from "./components/Game";
import HighScores from "./components/HighScores";
import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");
  const [highScores, setHighScores] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [letters, setLetters] = useState([]);
  const [gameStatus, setGameStatus] = useState(null);
  const [frame, setFrame] = useState(1);
  const [currentScore, setCurrentScore] = useState(0);

  if (currentScore < 0) {
    setCurrentScore(0);
  }

  switch (page) {
    case "home":
      return (
        <Home
          setPage={setPage}
          setFrame={setFrame}
          setLetters={setLetters}
          setGameStatus={setGameStatus}
          setCurrentScore={setCurrentScore}
        />
      );
    case "game":
      return (
        <Game
          letters={letters}
          setPage={setPage}
          frame={frame}
          setFrame={setFrame}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          highScores={highScores}
          setHighScores={setHighScores}
          gameStatus={gameStatus}
          setGameStatus={setGameStatus}
        />
      );
    case "high-scores":
      return <HighScores setPage={setPage} highScores={highScores} />;
  }
}
