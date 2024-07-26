import "./App.css";
import Home from "./components/Home";
import Game from "./components/Game";
import HighScores from "./components/HighScores";
import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("game");
  const [highScores, setHighScores] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const word = "winner";
  switch (page) {
    case "home":
      return <Home setPage={setPage} />;
    case "game":
      return <Game setPage={setPage} setHighScores={setHighScores} />;
    case "high-scores":
      return <HighScores setPage={setPage} highScores={highScores} />;
    case "settings":
      console.log("settings do not exist");
  }
}
