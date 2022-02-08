import React, { useState } from "react";
import GameOver from "./components/GameOver";

function MemoryGame() {
  const [gameOver, setGameOver] = useState(false);

  function restart() {
    setGameOver(false);
  }
  return (
    <div>
      <GameOver show={gameOver} handleRestart={restart}></GameOver>
    </div>
  );
}

export default MemoryGame;
