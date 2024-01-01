import { ICharacter, IEpisode, ILocation } from "../interfaces/interface";
import Image from "next/image";
import styles from "./Cards.module.css";

export default function Card(el: ICharacter | IEpisode | ILocation) {
  if ("image" in el) {
    return (
      <div className={styles.card}>
        <Image
          src={el.image}
          alt={el.name}
          className={styles.image}
          width={250}
          height={210}
          priority
        />
        <h3 className={styles.name}>{el.name}</h3>
        <div className={styles.description}>
          <p>Status: {el.status}</p>
          <p>Species: {el.species}</p>
          <p>Type: {el.type ? el.type : "unknown"}</p>
          <p>Gender: {el.gender}</p>
          <p>Origin: {el.origin.name}</p>
          <p>Location: {el.location.name}</p>
        </div>
      </div>
    );
  } else if ("air_date" in el) {
    return (
      <div className={styles.card}>
        <h3 className={styles.name}>{el.name}</h3>
        <div className={styles.description}>
          <p>Air date: {el.air_date}</p>
          <p>Episode: {el.episode}</p>
        </div>
      </div>
    );
  } else if ("residents" in el) {
    console.log(el);
    return (
      <div className={styles.card}>
        <h3 className={styles.name}>{el.name}</h3>
        <div className={styles.description}>
          <p>Type: {el.type}</p>
          <p>Dimension: {el.dimension}</p>
        </div>
      </div>
    );
  }
}
