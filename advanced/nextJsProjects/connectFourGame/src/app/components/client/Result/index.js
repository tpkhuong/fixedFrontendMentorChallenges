import React from "react";
import styles from "./Result.module.css";

export default function ResultsDisplay({ children }) {
  return (
    <div className={styles[`results-container`]}>
      <h2 id="winner-text-selector" className={styles[`winner`]}>
        PLAYER 1
      </h2>
      <span>WINS</span>
      <button className={styles[`play-again-btn`]}>PLAY AGAIN</button>
    </div>
  );
}
