export default function Hangman({ hangState }) {
  return <img src={`/src/assets/images/${hangState}.png`} alt="hangmanState" />;
}
