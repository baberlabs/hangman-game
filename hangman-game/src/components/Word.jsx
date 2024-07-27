export default function Word({ letters, guessedLetters }) {
  return (
    <p className="word">
      {letters.map((letter, index) => {
        let className = "";
        if (guessedLetters.includes(letter)) {
          className = "correct-guess";
        } else {
          className = "hidden";
        }
        return (
          <span key={index}>
            <span className={className}>{letter}</span>
          </span>
        );
      })}
    </p>
  );
}
