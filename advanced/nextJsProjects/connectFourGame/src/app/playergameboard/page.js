import React from "react";
import styles from "./PlayerGameBoard.module.css";
import { GameContext } from "../components/context/index";
import ConnectFourBoard from "../components/client/ConnectFourBoard";
import PlayerTurnTimer from "../components/client/PlayerTurnTimer";
import ResultsDisplay from "../components/client/Result";

export default function PlayerGameBoard({ children }) {
  return (
    <main
      id="game-board-bg-selector"
      data-playerturn="null"
      data-result="null"
      className={styles[`game-board-bg-container`]}
    >
      <ConnectFourBoard />
      {/* <ResultsDisplay /> */}
      {/* <div className={styles[`circle-container`]}>
        <div className={`${styles[`circle`]} ${styles[`chip-bg`]}`}></div>
        <div className={`${styles[`circle`]} ${styles[`chip-bottom`]}`}></div>
        <div className={`${styles[`circle`]} ${styles[`chip-top`]}`}></div>
        <div className={`${styles[`circle`]} ${styles[`chip-border`]}`}></div>
      </div> */}
      {/* <div className={`${styles[`circle`]} ${styles[`top`]}`}></div> */}
      {/* <div className={styles[`dropped-circle-container`]}>
        <div
          className={`${styles[`circle`]} ${styles[`dropped-chip-bg`]}`}
        ></div>
        <div
          className={`${styles[`circle`]} ${styles[`dropped-chip-top`]}`}
        ></div>
        <div
          className={`${styles[`circle`]} ${styles[`dropped-chip-border`]}`}
        ></div>
      </div> */}

      {/* <PlayerTurnTimer /> */}
      {/* lower bg change bg color based on results */}
      <div id="lower-bg-selector" className={styles[`bottom-bg`]}></div>
      {/* game board */}
      {/* pause modal */}
    </main>
  );
}
