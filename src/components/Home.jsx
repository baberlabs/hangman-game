import words from "../words";

export default function Home({
  setPage,
  setFrame,
  setLetters,
  setGameStatus,
  setCurrentScore,
}) {
  function handleClick(event) {
    switch (event.target.className) {
      case "start-game-button":
        setGameStatus(null);
        setFrame(1);
        setPage("game");
        setCurrentScore(0);
        const randomIndex = Math.round(Math.random(words.length) * 100);
        console.log(words[randomIndex]);
        setLetters(words[randomIndex].toUpperCase().split(""));
        break;
      case "high-scores-button":
        setPage("high-scores");
        break;
    }
  }

  return (
    <section className="home">
      <button onClick={handleClick} className="start-game-button">
        Start Game
      </button>
      <button onClick={handleClick} className="high-scores-button">
        High Scores
      </button>
    </section>
  );
}
