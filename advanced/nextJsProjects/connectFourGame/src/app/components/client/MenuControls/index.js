"use client";

import React from "react";
import styles from "./MenuControls.module.css";

export default function MenuControls({ children }) {
  return (
    <div className={styles[`menu-controls-container`]}>
      <button className={styles[`menu-btn`]}></button>
      <img src="" alt="" />
      <button className={styles[`restart-btn`]}></button>
    </div>
  );
}
