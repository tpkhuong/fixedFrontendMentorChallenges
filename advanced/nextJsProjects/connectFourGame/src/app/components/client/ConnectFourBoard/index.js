"use client";
import React from "react";
import styles from "./ConnectFourBoard.module.css";
import PlayerTurnTimer from "../PlayerTurnTimer";
import ResultsDisplay from "../Result/index";
import { checking } from "./connectFourBoardHelpers";

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
          id="row-6"
          className={styles[`row`]}
          onClick={(event) => {
            console.log(event);
          }}
        >
          <span
            onClick={(event) => {
              console.log(event);
              document
                .getElementById("row-1")
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
        <div id="row-5" className={styles[`row`]}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="row-4" className={styles[`row`]}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="row-3" className={styles[`row`]}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="row-2" className={styles[`row`]}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="row-1" className={styles[`row`]}>
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
            id="animation-column-first"
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
          <span id="animation-column-second" data-droppedposition=""></span>
          <span id="animation-column-third" data-droppedposition=""></span>
          <span id="animation-column-fourth" data-droppedposition=""></span>
          <span id="animation-column-fifth" data-droppedposition=""></span>
          <span id="animation-column-sixth" data-droppedposition=""></span>
          <span id="animation-column-seventh" data-droppedposition=""></span>
        </div>
        {/* drop pointer container */}
        <div
          data-chipdroplocation=""
          className={styles[`drop-selection-pointer-container`]}
        >
          <div className={styles[`pointer-container`]}>
            {/* <img src="/images/marker-red.svg" alt="" /> */}
          </div>
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
          checking(event);
        }}
      >
        <span data-column="first"></span>
        <span data-column="second"></span>
        <span data-column="third"></span>
        <span data-column="fourth"></span>
        <span data-column="fifth"></span>
        <span data-column="sixth"></span>
        <span data-column="seventh"></span>
      </div>
    </div>
  );
}
