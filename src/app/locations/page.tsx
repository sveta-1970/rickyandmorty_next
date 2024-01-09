//"locations": "https://rickandmortyapi.com/api/location"

"use client";

import { useState, useEffect } from "react";
import { req } from "@/components/services/server.request";
import Pagination from "@/components/Pagination/Pagination";
import Cards from "@/components/Cards/index";
import { ICharacter, IEpisode, ILocation } from "@/components/interfaces/interface";

export default function fetchLocations() {
  type NextPageUrl = string;
  type currentPageUrl = string;
  type PrevPageUrl = string;
  type Pages = number;
  type locations = (ICharacter | ILocation | IEpisode)[];
  type loading = boolean;

  const [loading, setLoading] = useState(true);
  const [locations, setLocations] = useState<
    (ICharacter | ILocation | IEpisode)[]
  >([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://rickandmortyapi.com/api/location"
  );
  const [nextPageUrl, setNextPageUrl] = useState<NextPageUrl>();
  const [prevPageUrl, setPrevPageUrl] = useState<PrevPageUrl>();
  const [pages, setPages] = useState<Pages>();

  useEffect(() => {
    const url = currentPageUrl;
    setLoading(true);
    const fetchData = async () => {
      const data = await req(url);
      setLocations(data.results);
      setLoading(false);
      setNextPageUrl(data.info.next);
      setPrevPageUrl(data.info.prev);
      setPages(data.info.pages);
    };
    fetchData();
  }, [currentPageUrl]);

  function nextPage() {
    if (nextPageUrl) {
      setCurrentPageUrl(nextPageUrl);
    }
  }

  function prevPage() {
    if (prevPageUrl) {
      setCurrentPageUrl(prevPageUrl);
    }
  }

  function goToPage(num: number) {
    setCurrentPageUrl(`https://rickandmortyapi.com/api/location?page=${num}`);
  }

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && (
        <main>
          <h1>Locations</h1>
          <Cards data={locations} />
          <Pagination
            nextPage={nextPageUrl ? nextPage : null}
            prevPage={prevPageUrl ? prevPage : null}
            goToPage={goToPage}
            pages={pages}
          />
        </main>
      )}
    </>
  );
}

