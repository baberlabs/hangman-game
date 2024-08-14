export default function Header({ setPage, currentScore }) {
  return (
    <header>
      <button onClick={() => setPage("home")}>Home</button>
      <div>Score: {currentScore}</div>
    </header>
  );
}
