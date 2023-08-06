"use client";
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
        <div className={styles[`drop-selection-pointer-container`]}>
          <div className={styles[`pointer-container`]}></div>
        </div>
        {/* <div className={`${styles[`row`]} ${styles[`click-row`]}`}>
          <span
            onClick={(event) => {
              console.log(event);
              document
                .getElementById("first-row")
                .firstElementChild.setAttribute("data-droppedposition", "last");
            }}
          ></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div> */}
        <div
          id="first-row"
          className={styles[`row`]}
          onClick={(event) => {
            console.log(event);
          }}
        >
          <span
            onClick={(event) => {
              console.log(event);
              document
                .getElementById("first-row")
                .firstElementChild.setAttribute(
                  "data-droppedposition",
                  "MobileDroppedPositionFirstRow"
                );
            }}
          ></span>
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
        {/* animation row */}
        <div
          id="animation-row"
          className={styles[`row`]}
          onClick={(event) => {
            console.log(event);
          }}
        >
          <span
            data-droppedposition=""
            onClick={(event) => {
              console.log(event);
              document
                .getElementById("first-row")
                .firstElementChild.setAttribute(
                  "data-droppedposition",
                  "MobileDroppedPositionFirstRow"
                );
            }}
          ></span>
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
      {/* declare pointer-events: none for div with class front-game-board */}
      {/* we can click on connect for chips */}
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
      <div
        className={styles[`clicking-container`]}
        onClick={(event) => {
          console.log(event);
        }}
      >
        <span data-column="one"></span>
        <span data-column="two"></span>
        <span data-column="three"></span>
        <span data-column="four"></span>
        <span data-column="five"></span>
        <span data-column="six"></span>
        <span data-column="seven"></span>
      </div>
    </div>
  );
}
