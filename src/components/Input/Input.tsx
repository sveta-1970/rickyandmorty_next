"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import image from "../../../public/Icon.svg";
import { useSearchParams, useRouter } from "next/navigation";
import styles from "./Input.module.css";

const Input = () => {
  //const searchParams = useSearchParams();
  const pathname = "/characters/";
  const { replace } = useRouter();
  let [searchTerm, setSearchTerm] = useState("");

  function handleSearch() {
    if (searchTerm) {
      //If the term is provided, redirect to the /characters/[name] page for the input term
      replace(`${pathname}${searchTerm}`);
    } else {
      replace(`/`);
    }
  }
  return (
    <div className={styles.search}>
      <input
        type="search"
        className={styles.input}
        placeholder="Filter characters by name"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Image
        src={image}
        alt="icon"
        className={styles.icon}
        width={30}
        height={30}
        priority
        onClick={handleSearch}
      />
    </div>
  );
};

export default Input;
