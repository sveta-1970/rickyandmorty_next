import { req } from "@/components/services/server.request";
//import {MouseEventHandler} from "react";
import Cards from "@/components/Cards/index";
//import ClientFunction from "next";
import { onPreviousPage, onNextPage } from "@/components/Pagination/Pagination";
import Button from "@/components/Cards/Button";
import {
  IFetchResult,
  ICharacters,
  IEpisodes,
  ILocations,
} from "@/components/interfaces/interface";

export default async function fetchCharacters() {
  const category: string = "characters";
  try {
    const data: IFetchResult = await req(
      "https://rickandmortyapi.com/api/character"
    );
   // const characters: ICharacters | IEpisodes | ILocations = data.results;
    const nextPageUrl = data.info.next;
    const prevPageUrl = data.info.prev;


    return (
      <main>
        <h1>Characters</h1>
        
        <Cards {...data} />
      </main>
    );
  } catch (e) {
    console.error(e);
  }
}

/**
 * <Button buttonText="Previous" onClick={} />
        <Button buttonText="Next" onClick={} />
 * onClick={handleClickPrevious}
 * onClick={handleClickNext} 
 * const handleClickPrevious = ClientFunction(() => {
      onPreviousPage(prevPageUrl);
    });

    const handleClickNext = ClientFunction(() => {
      onNextPage(nextPageUrl);
    });
 */