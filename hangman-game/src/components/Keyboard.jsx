export default function Keyboard({ correctLetters, setCorrectLetters }) {
  function handleClick() {}
  const chars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return (
    <section className="keyboard" onClick={handleClick}>
      {chars.map((char) => (
        <button key={char}>{char.toUpperCase()}</button>
      ))}
    </section>
  );
}
