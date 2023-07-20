import React from "react";
import styles from "./ConnectFourBoard.module.css";
import PlayerTurnTimer from "../PlayerTurnTimer";

export default function ConnectFourBoard({ children }) {
  return (
    <div className={styles[`connect-four-board-container`]}>
      <PlayerTurnTimer whichPlayerTurn="one" />
      {/* import result and player turn timer to this component */}
    </div>
  );
}
