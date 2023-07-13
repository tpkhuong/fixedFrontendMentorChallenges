"use client";
import React from "react";
import styles from "./PauseModal.module.css";

export default function PauseGame({ children }) {
  return (
    <div className={styles[`pause-modal-container`]}>
      <div
        aria-labelledby="pause-modal-title"
        aria-modal="true"
        role="dialog"
        className={styles[`pause-modal`]}
      >
        <h2 id="pause-modal-title">Pause</h2>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  );
}
