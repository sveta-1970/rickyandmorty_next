import React, { MouseEventHandler } from "react";
import styles from "./Cards.module.css"

type ButtonProps = {
 buttonText: string;
 onClick: MouseEventHandler;
}

function ButtonWithCards({ buttonText, onClick }: ButtonProps) {
  return <button className={styles.button} onClick={onClick}>{buttonText}</button>
}

export default ButtonWithCards;
