import React from "react";
import Image from "next/image";
import image from "../../../public/Icon.svg";
import styles from "./Input.module.css";

const Input = () => {
  return (
    <div className={styles.search}>
      <input
        type="search"
        className={styles.input}
        placeholder="Filter by name"
      />
      <Image
        src={image}
        alt="icon"
        className={styles.icon}
        width={30}
        height={30}
        priority
      />
    </div>
  );
};

export default Input;
