import React from "react";
import styles from "./ConnectFourBoard.module.css";
import PlayerTurnTimer from "../PlayerTurnTimer";
import ResultsDisplay from "../Result/index";

export default function ConnectFourBoard({ children }) {
  return (
    <div className={styles[`connect-four-board-container`]}>
      <PlayerTurnTimer />
      <ResultsDisplay />
      {/* import result and player turn timer to this component */}
      {/* back img */}
      <div className={styles[`back-game-board`]}>
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="/images/board-layer-black-large.svg"
          />
          <img
            src="/images/board-layer-black-small.svg"
            alt="connect four game board with forty two circles."
          />
        </picture>
      </div>
      {/* rows/columns of chips */}
      <div className={styles[`chips-container`]}>
        <div id="first-row" className={styles[`row`]}>
          <span data-droppedposition="" onClick={(event) => {}}></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles[`row`]}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles[`row`]}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles[`row`]}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles[`row`]}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles[`row`]}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {/* <div className={styles[`chips-container`]}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div> */}
      {/* front img */}
      <div className={styles[`front-game-board`]}>
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="/images/board-layer-white-large.svg"
          />
          <img
            src="/images/board-layer-white-small.svg"
            alt=""
            aria-hidden="true"
          />
        </picture>
      </div>
    </div>
  );
}
