export default function HomeButton({ setPage }) {
  function handleClick() {
    setPage("home");
  }
  return (
    <button onClick={handleClick} className="home-button">
      Home
    </button>
  );
}
