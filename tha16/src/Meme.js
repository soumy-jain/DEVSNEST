import React from "react";
import "./Meme.css";

function Meme(prop) {
  return (
    <div className="meme-card">
      <h1>{prop.text}</h1>
      <img src={prop.source} alt=""/>
    </div>
  );
}

export default Meme;
