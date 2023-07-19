import React from "react";
import styles from "./PlayerGameBoard.module.css";

export default function PlayerGameBoard({ children }) {
  return (
    <main
      id="game-board-bg-selector"
      data-playerturn="null"
      data-result="null"
      className={styles[`game-board-bg-container`]}
    >
      {/* lower bg change bg color based on results */}
      <div id="lower-bg-selector" className={styles[`bottom-bg`]}></div>
      {/* game board */}
      {/* pause modal */}
    </main>
  );
}
