//"episodes": "https://rickandmortyapi.com/api/episode"

import { req } from "@/components/services/server.request";
import Cards from "@/components/Cards/index";
import { IFetchResult } from "@/components/interfaces/interface";

export default async function fetchEpisodes() {
  const category: string = "episodes";
  try {
    const data: IFetchResult = await req(
      "https://rickandmortyapi.com/api/episode"
    );
    return (
      <main>
        <h1>Episodes</h1>
        <Cards {...data} />
      </main>
    );
  } catch (e) {
    console.error(e);
  }
}
