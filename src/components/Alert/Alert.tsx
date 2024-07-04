"use client";

import React, { useEffect } from "react";
import styles from "./Alert.module.css";
import type { AlertType } from "@/app/types";

type AlertProps = {
  type: AlertType;
  message: string;
  onClose?: () => void;
};

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  useEffect(() => {
    if (onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [onClose]);

  return (
    <div className={`${styles.alert} ${styles[type]}`} role="alert">
      <p className={styles.message}>{message}</p>
      {onClose && (
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Cerrar alerta"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;
