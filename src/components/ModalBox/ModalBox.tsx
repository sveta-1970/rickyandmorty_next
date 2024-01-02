import { useEffect, useState } from "react";
import Image from "next/image";
import { req } from "@/components/services/server.request";

import styles from "./ModalBox.module.css";
import { ICharacter, IEpisode } from '../interfaces/interface';

type ModalProps = {
  category: string
  cardInfo: string[];
  onClose: () => void;
};

export default function modalBox({ cardInfo, category, onClose }: ModalProps) {
  const [episodeData, setEpisodeData] = useState<IEpisode[]>([]);
  const [characterData, setCharacterData] = useState<ICharacter[]>([]);

  if(category ==="episode"){
    useEffect(() => {
      const fetchEpisodeData = async () => {
        const fetchData = cardInfo.map((url) => req(url));
        const episodeData = await Promise.all(fetchData);
        setEpisodeData(episodeData);
      };
      fetchEpisodeData();
    }, [cardInfo]);
  } else if(category ==="character") {
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
            src="data:image/png;base64,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"
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

