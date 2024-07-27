export default function HighScores({ setPage, highScores }) {
  return (
    <section className="high-scores">
      <button onClick={() => setPage("home")}>Home</button>
      <h2>High Scores</h2>
      <ol>
        {highScores.map((score, index) => (
          <li key={index}>{score}</li>
        ))}
      </ol>
    </section>
  );
}
