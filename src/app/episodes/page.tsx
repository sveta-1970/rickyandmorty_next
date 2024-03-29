//"episodes": "https://rickandmortyapi.com/api/episode"

"use client";

import { useState, useEffect } from "react";
import { req } from "@/components/services/server.request";
import Loader from "@/components/Loader/Loader";
import Pagination from "@/components/Pagination/Pagination";
import Cards from "@/components/Cards/index";
import { ICharacter, IEpisode, ILocation } from "@/components/interfaces/interface";

export default function fetchEpisodes() {
  type NextPageUrl = string;
  type currentPage = number;
  type currentPageUrl = string;
  type PrevPageUrl = string;
  type Pages = number;
  type episodes = (ICharacter | ILocation | IEpisode)[];
  type loading = boolean;

  const [loading, setLoading] = useState(true);
  const [episodes, setEpisodes] = useState<
    (ICharacter | ILocation | IEpisode)[]
  >([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
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
      const nextPageNumber = getNextPageNumber(nextPageUrl);
      setCurrentPage(nextPageNumber);
      setCurrentPageUrl(nextPageUrl);
    }
  }

  function getNextPageNumber(nextPageUrl: string): number {
    // Extract the page number from the nextPageUrl
    const pageNumberMatch = nextPageUrl.match(/page=(\d+)/);
    if (pageNumberMatch) {
      return parseInt(pageNumberMatch[1]);
    }
    return 0; // Or any default value
  }

  function prevPage() {
    if (prevPageUrl) {
      const prevPageNumber = getPrevPageNumber(prevPageUrl);
      setCurrentPage(prevPageNumber);
      setCurrentPageUrl(prevPageUrl);
    }
  }

  function getPrevPageNumber(prevPageUrl: string): number {
    // Extract the page number from the prevPageUrl
    const pageNumberMatch = prevPageUrl.match(/page=(\d+)/);
    if (pageNumberMatch) {
      console.log(pageNumberMatch[1]);
      return parseInt(pageNumberMatch[1]);
    }
    return 0; // Or any default value
  }

  function goToPage(num: number) {
    setCurrentPage(num);
    setCurrentPageUrl(`https://rickandmortyapi.com/api/episode?page=${num}`);
  }

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <main>
          <h1>Episodes</h1>
          <Cards data={episodes} />
          <Pagination
            nextPage={nextPageUrl ? nextPage : null}
            prevPage={prevPageUrl ? prevPage : null}
            goToPage={goToPage}
            pages={pages}
            currentPage={currentPage}
          />
        </main>
      )}
    </>
  );
}
