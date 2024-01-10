"use client"
import React, {useState} from 'react';
import styles from "./Pagination.module.css";

type PaginationProps = {
  nextPage: (() => void) | null;
  prevPage: (() => void) | null;
  goToPage: (num: number) => void;
  pages?: number;
  currentPage: number;
};

function Pagination({ nextPage, prevPage, goToPage, pages, currentPage }: PaginationProps){
  let pageButtons: Array<JSX.Element> = [];

  if(pages){
    for (let i = 1; i <= pages; i++) {
      pageButtons.push(
        <button key={i} className={i === currentPage ? styles.currentPageBtn : styles.pageBtn} onClick={() => {
          goToPage(i);
          }}
        >
          {i}
        </button>
      );
    }

    return (
      <div className={styles.paginationContainer}>
        {prevPage && <button onClick={prevPage}>Previous</button>}
        {pageButtons}
        {nextPage && <button onClick={nextPage}>Next</button>}
      </div>
    );
  }
}

export default Pagination;


