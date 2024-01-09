import React from 'react';

type PaginationProps = {
  nextPage: (() => void) | null;
  prevPage: (() => void) | null;
  goToPage: (num: number) => void;
  pages?: number;
};

function Pagination({ nextPage, prevPage, goToPage, pages }: PaginationProps){
  let pageButtons: Array<JSX.Element> = [];
  if(pages){
    for (let i = 1; i <= pages; i++) {
      pageButtons.push(
        <button key={i} onClick={() => goToPage(i)}>
          {i}
        </button>
      );
    }

    return (
      <div>
        {prevPage && <button onClick={prevPage}>Previous</button>}
        {pageButtons}
        {nextPage && <button onClick={nextPage}>Next</button>}
      </div>
    );
  }
}

export default Pagination;


