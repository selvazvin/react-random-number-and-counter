import React, { useState } from "react";

function Random() {
  const [randomNumber] = useState(Math.floor(Math.random() * 10) + 1);
  const [noOfGuesses, setNoOfGuesses] = useState(3);
  const [message, setMessage] = useState("Make a guess!");
  const [guess, setGuess] = useState("");

  function check() {
    if (!guess) {
      alert("Please enter a number!");
      return;
    }

    if (parseInt(guess) === randomNumber) {
      alert("You Got it Right, Congratulations!");
      setMessage("You are Right!");
    } else {
      if (noOfGuesses === 1) {
        alert(`You Lost, Generated Random number was: ${randomNumber}`);
        setMessage("You Lost!");
      } else {
        setNoOfGuesses(noOfGuesses - 1);
        setMessage("You are Wrong! Try again.");
      }
    }
  }

  return (
    <div className="random">
      <h1>Guess the Random Number (1 to 10)</h1>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button onClick={check}>Check</button>
      <p>{message}</p>
      <p>Available Guesses: {noOfGuesses}</p>
    </div>
  );
}

export default Random;
