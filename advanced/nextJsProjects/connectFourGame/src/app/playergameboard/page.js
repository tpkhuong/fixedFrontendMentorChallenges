import React from "react";
import styles from "./PlayerGameBoard.module.css";

export default function PlayerGameBoard({ children }) {
  return (
    <React.Fragment>
      <h1 className={styles[`title`]}>Welcome to Player Game Board</h1>
    </React.Fragment>
  );
}
