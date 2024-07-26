import HomeButton from "./HomeButton";
import CurrentScore from "./CurrentScore";

export default function Header({ setPage, currentScore }) {
  return (
    <>
      <HomeButton setPage={setPage} />
      <CurrentScore currentScore={currentScore} />
    </>
  );
}
