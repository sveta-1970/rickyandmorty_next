"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Menu() {
  const pathname = usePathname();

  return (
    <ul className={styles.nav}>
      <li>
        <Link href="/" className={pathname === "/" ? styles.active : ""}>
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/characters"
          className={pathname === "/characters" ? styles.active : ""}
        >
          Characters
        </Link>
      </li>
      <li>
        <Link
          href="/locations"
          className={pathname === "/locations" ? styles.active : ""}
        >
          Locations
        </Link>
      </li>
      <li>
        <Link
          href="/episodes"
          className={pathname === "/episodes" ? styles.active : ""}
        >
          Episodes
        </Link>
      </li>
    </ul>
  );
}
