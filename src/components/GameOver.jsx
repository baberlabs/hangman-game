export default function GameOver({ setPage }) {
  return (
    <section className="game-over">
      <h2>Game Over</h2>
      <div>
        <button onClick={() => setPage("home")} className="home-button">
          Home
        </button>
      </div>
    </section>
  );
}
