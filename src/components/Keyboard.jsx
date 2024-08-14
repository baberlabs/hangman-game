export default function Keyboard({ letters, handleGuess }) {
  const chars = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "@", "#"],
    ["z", "x", "c", "v", "b", "n", "m", "<", ">", "?"],
  ];

  function handleClick(e) {
    if (e.target.tagName === "BUTTON") {
      e.target.disabled = true;
      const pressedKey = e.target.innerText;
      handleGuess(pressedKey);

      if (letters.includes(pressedKey)) {
        e.target.classList.add("correct-guess");
      }
    }
  }

  return (
    <section className="keyboard" onClick={handleClick}>
      {chars.map((charSegment, index) => (
        <div className="keyboard-row" key={index}>
          {charSegment.map((char) => (
            <button key={char}>{char.toUpperCase()}</button>
          ))}
        </div>
      ))}
    </section>
  );
}
