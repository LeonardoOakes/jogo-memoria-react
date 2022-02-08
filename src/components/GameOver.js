import React, { Fragment } from "react";

function GameOver(props) {
  return props.show ? (
    <div id="gameOver">
      <div> Parabéns, você venceu! </div>
      <button id="restart" onClick={props.handleRestart}>
        Jogar novamente
      </button>
    </div>
  ) : (
    <Fragment></Fragment>
  );
}

export default GameOver;
