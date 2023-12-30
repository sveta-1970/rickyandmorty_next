import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>Main page</div>
      <div className={styles.banner}>
        
        <Image
          src="/rick-and-morty2_1.png"
          alt="Logo"
          className={styles.logo}
          width={300}
          height={200}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Find in-depth information about Next.js features and API.</p>
        </a>
      </div>
    </main>
  );
}
