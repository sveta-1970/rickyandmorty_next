import Image from "next/image";
import Menu from "./Menu";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src="/logo-black1.png"
        alt="logo"
        width={46}
        height={49}
        priority
      />
      <Menu />
    </header>
  );
}
