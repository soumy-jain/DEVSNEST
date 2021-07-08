import React from "react";
import "./Chess.css";

function Square() {
  return (<div className="square"></div>);
}

function Row() {
  return (
    <div className="row">
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
    </div>
  );
}

function Board() {
  return (
    <div className="board">
      <Row></Row>
      <Row></Row>
      <Row></Row>
      <Row></Row>
      <Row></Row>
      <Row></Row>
      <Row></Row>
      <Row></Row>
    </div>
  );
}

export default Board;
