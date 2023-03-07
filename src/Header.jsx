/** @format */

import React from "react";
import Trollface from "./images/trollface.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header--title">
        <img src={Trollface} alt="Trollface icon" />
        <h2>Meme Generator</h2>
      </div>

      <h4 className="header--project">
        <a href="https://scrimba.com/playlist/prXJpCQ" target="_blank">
          React Course - Project 3
        </a>
      </h4>
    </header>
  );
}
