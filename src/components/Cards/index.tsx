import Card from "./Card";
import styles from "./Cards.module.css";
import { ICharacter, IEpisode, ILocation, IFetchResult, ICharacters, IEpisodes, ILocations } from "../interfaces/interface";

export default function Cards(props: IFetchResult): JSX.Element {
const propsResults: ICharacters | IEpisodes | ILocations = props.results;

return (
  <div className={styles.cards}>
    {Array.isArray(propsResults) ? (
      propsResults.map((el: ICharacter | IEpisode | ILocation) => {
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
