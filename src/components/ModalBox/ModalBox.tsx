import { useEffect, useState } from "react";
import Image from "next/image";
import { req } from "@/components/services/server.request";

import styles from "./ModalBox.module.css";
import { ICharacter, IEpisode } from "../interfaces/interface";

type ModalProps = {
  category: string;
  cardInfo: string[];
  onClose: () => void;
};

export default function modalBox({ cardInfo, category, onClose }: ModalProps) {
  const [episodeData, setEpisodeData] = useState<IEpisode[]>([]);
  const [characterData, setCharacterData] = useState<ICharacter[]>([]);

  if (category === "episode") {
    useEffect(() => {
      const fetchEpisodeData = async () => {
        const fetchData = cardInfo.map((url) => req(url));
        const episodeData = await Promise.all(fetchData);
        setEpisodeData(episodeData);
      };
      fetchEpisodeData();
    }, [cardInfo]);
  } else if (category === "character") {
    useEffect(() => {
      const fetchCharacterData = async () => {
        const fetchData = cardInfo.map((url) => req(url));
        const characterData = await Promise.all(fetchData);
        setCharacterData(characterData);
      };
      fetchCharacterData();
    }, [cardInfo]);
  }

  const handleClose = () => {
    onClose();
  };

  return (
    <div className={styles.modalBox}>
      <div className={styles.modal}>
        <span className={styles.modalClosed} onClick={handleClose}>
          <Image
            src="/icons/Close-menu.png"
            alt="close"
            width={25}
            height={25}
          />
        </span>
        <div className={styles.modalBody}>
          {category === "episode" ? (
            episodeData.map((episode) => (
              <div key={episode.id} className={styles.card}>
                <h2>{episode.name}</h2>
                <p>Air date: {episode.air_date}</p>
                <p>Episode: {episode.episode}</p>
              </div>
            ))
          ) : category === "character" ? (
            characterData.map((character) => (
              <div key={character.id} className={styles.card}>
                <h2>{character.name}</h2>
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
                <p>Type: {character.type ? character.type : "unknown"}</p>
                <p>Gender: {character.gender}</p>
                <p>Origin: {character.origin.name}</p>
                <p>Location: {character.location.name}</p>
              </div>
            ))
          ) : (
            <p>No results</p>
          )}
        </div>
      </div>
    </div>
  );
}
