"use client";

import { usePathname } from "next/navigation";
import { useState} from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Menu() {
  const pathname = usePathname();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isBurgerMenuVisible, setIsBurgerMenuVisible] = useState(true);
  const [isCloseMenuVisible, setIsCloseMenuVisible] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuVisible(!isMenuVisible);
    setIsCloseMenuVisible(!isCloseMenuVisible);
    setIsBurgerMenuVisible(false);
  };

  const handleMenuClose = () => {
    setIsMenuVisible(false);
    setIsCloseMenuVisible(false);
    setIsBurgerMenuVisible(!isBurgerMenuVisible);
  };

  return (
    <>
      {isBurgerMenuVisible && (
        <Image
          className={styles.burgerMenu}
          src="/icons/Icon-Burger-menu.png"
          alt="burger menu"
          width={24}
          height={24}
          priority
          onClick={handleMenuToggle}
        />
      )}
      <ul
        className={
          isMenuVisible
            ? styles.nav && styles.visible
            : styles.nav && styles.hidden
        }
        style={
          isMenuVisible
            ? { flexDirection: "column", alignItems: "left", gap: "15px" }
            : undefined
        }
      >
        <li>
          <Link href="/" className={pathname === "/" ? styles.active : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/characters"
            id="characters"
            className={pathname === "/characters" ? styles.active : ""}
          >
            Characters
          </Link>
        </li>
        <li>
          <Link
            href="/locations"
            id="locations"
            className={pathname === "/locations" ? styles.active : ""}
          >
            Locations
          </Link>
        </li>
        <li>
          <Link
            href="/episodes"
            id="episodes"
            className={pathname === "/episodes" ? styles.active : ""}
          >
            Episodes
          </Link>
        </li>
      </ul>
      {isCloseMenuVisible && (
        <Image
          className={styles.closeMenu}
          src="/icons/Close-menu.png"
          alt="close menu"
          width={24}
          height={24}
          priority
          onClick={handleMenuClose}
        />
      )}
    </>
  );
}


/**
 * useEffect(() => {
    const mediaQuery =
      window.matchMedia("(max-width: 600px)");
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMenuVisible(event.matches);
    };

    mediaQuery.addEventListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
  });
 */