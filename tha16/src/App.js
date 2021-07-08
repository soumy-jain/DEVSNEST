import React from "react";
import "./App.css";
import Meme from "./Meme.js";
import Board from "./Chess.js";

function App() {
  return (
    <div className="App">
      <Meme
        source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsINalmUP5V38De4OrPoioazhAtM8iwHs-dg&usqp=CAU"
        text="This is a Meme-Card"
      />
      {/* <Meme source= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsINalmUP5V38De4OrPoioazhAtM8iwHs-dg&usqp=CAU"  /> */}
      <Board />
    </div>
  );
}

export default App;
