export default function GameOver({ setPage, currentScore, highScores }) {
  return (
    <section className="game-won">
      <h2>You Win!</h2>
      <p>Score: {currentScore}</p>
      <p>Highest Score: {highScores[0]}</p>
      <div>
        <button onClick={() => setPage("home")} className="home-button">
          Home
        </button>
      </div>
    </section>
  );
}
