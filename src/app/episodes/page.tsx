//"episodes": "https://rickandmortyapi.com/api/episode"
/*
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
}*/

"use client";

import { useState, useEffect } from "react";
import { req } from "@/components/services/server.request";
import Pagination from "@/components/Pagination/Pagination";
import Cards from "@/components/Cards/index";
import { ICharacter, IEpisode, ILocation } from "@/components/interfaces/interface";

export default function fetchEpisodes() {
  type NextPageUrl = string;
  type currentPageUrl = string;
  type PrevPageUrl = string;
  type Pages = number;
  type episodes = (ICharacter | ILocation | IEpisode)[];
  type loading = boolean;

  const [loading, setLoading] = useState(true);
  const [episodes, setEpisodes] = useState<
    (ICharacter | ILocation | IEpisode)[]
  >([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://rickandmortyapi.com/api/episode"
  );
  const [nextPageUrl, setNextPageUrl] = useState<NextPageUrl>();
  const [prevPageUrl, setPrevPageUrl] = useState<PrevPageUrl>();
  const [pages, setPages] = useState<Pages>();

  useEffect(() => {
    const url = currentPageUrl;
    setLoading(true);
    const fetchData = async () => {
      const data = await req(url);
      setEpisodes(data.results);
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
    setCurrentPageUrl(`https://rickandmortyapi.com/api/episode?page=${num}`);
  }

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && (
        <main>
          <h1>Episodes</h1>
          <Cards data={episodes} />
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
