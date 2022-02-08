import React from "react";
import Card from "./Card";

export default function GameBoard(props) {
  return (
    <div id="gameBoard">
      {props.cards.map((card, index) => 
        <Card key={index} card={card}></Card>
      )}
    </div>
  );
}
