"use client";

export function onNextPage(nextPageUrl: string | null) {
  if (nextPageUrl) {
    fetch(nextPageUrl)
      .then((response) => response.json())
      .then((data) => {
        const characters = data.results;
        // Update characters displayed on your page
        // Implement logic for handling next and previous page buttons
      });
  }
}

export function onPreviousPage(prevPageUrl: string | null) {
  if (prevPageUrl) {
    fetch(prevPageUrl)
      .then((response) => response.json())
      .then((data) => {
        const characters = data.results;
        // Update characters displayed on your page
        // Implement logic for handling next and previous page buttons
      });
  }
}
