//"locations": "https://rickandmortyapi.com/api/location"

import { req } from "@/components/services/server.request";
import Cards from "@/components/Cards/index";
import { IFetchResult } from "@/components/interfaces/interface";

export default async function fetchLocations() {
  const category: string = "locations";
  try {
    const data: IFetchResult = await req(
      "https://rickandmortyapi.com/api/location"
    );
    return (
      <main>
        <h1>Locations</h1>
        <Cards {...data} />
      </main>
    );
  } catch (e) {
    console.error(e);
  }
}
