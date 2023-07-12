"use client";

import React from "react";
import styles from "./BackToGameMenu.module.css";
import { backToGameOptions } from "./backToGameMenuHelpers";

export default function BackToGameMenu({ children }) {
  return (
    <React.Fragment>
      <button
        className={styles[`checked-btn`]}
        type="button"
        aria-label="go back to game options"
        onClick={(event) => {
          backToGameOptions({ event });
        }}
      >
        <img
          className={styles[`checked-image`]}
          src="/images/icon-check.svg"
          alt=""
        />
      </button>
    </React.Fragment>
  );
}
