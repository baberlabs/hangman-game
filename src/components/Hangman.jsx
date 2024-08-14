export default function Hangman({ frame }) {
  return (
    <img
      className="hangman-image"
      src={`/src/assets/images/${frame}.png`}
      alt="hangmanState"
    />
  );
}
