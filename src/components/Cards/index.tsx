import Card from "./Card";
import styles from "./Cards.module.css";
import { ICharacter, IEpisode, ILocation } from "../interfaces/interface";

export default function Cards(props: {
  data: (ICharacter | IEpisode | ILocation)[];
}): JSX.Element {
  return (
    <div className={styles.cards}>
      {Array.isArray(props.data) ? (
        props.data.map((el: ICharacter | IEpisode | ILocation) => {
          if ("image" in el) {
            return <Card key={el.id} {...(el as ICharacter)} />;
          } else if ("air_date" in el) {
            return <Card key={el.id} {...(el as IEpisode)} />;
          } else if ("residents" in el) {
            return <Card key={el.id} {...(el as ILocation)} />;
          }
        })
      ) : (
        <p>No results</p>
      )}
    </div>
  );
}
