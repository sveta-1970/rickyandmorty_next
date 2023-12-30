import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        
        <Image
          src="/rick-and-morty2_1.png"
          alt="Logo"
          className={styles.logo}
          width={270}
          height={210}
          priority
        />
      </div>

      <div className={styles.footer}>
        <a
          href="https://rickandmortyapi.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Find in-depth information about Rick and Morty API.</p>
        </a>
      </div>
    </main>
  );
}
