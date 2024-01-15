import Image from "next/image";
import styles from "@/components/Loader/Loader.module.css";

export default function Loader(){

  const text = "Loading";
  const letters = text.split("");

  return (
    <div>
      <Image
        key="1"
        className={styles.loadImage}
        src="/logo-black1.png"
        alt="logo"
        width={46}
        height={49}
        priority
      />
      <Image
        key="2"
        className={styles.loadImage}
        src="/logo-black1.png"
        alt="logo"
        width={46}
        height={49}
        priority
      />
      <Image
        key="3"
        className={styles.loadImage}
        src="/logo-black1.png"
        alt="logo"
        width={46}
        height={49}
        priority
      />
    </div>
  );
}