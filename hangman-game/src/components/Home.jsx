export default function Home({ setPage }) {
  function handleClick(event) {
    switch (event.target.className) {
      case "start-game-button":
        setPage("game");
        break;
      case "high-scores-button":
        setPage("high-scores");
        break;
      case "settings-button":
        setPage("settings");
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
      <button onClick={handleClick} className="settings-button" disabled>
        Settings
      </button>
    </section>
  );
}
