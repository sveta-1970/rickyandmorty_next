"use server";
import { ICharacters } from "../interfaces/interface";

async function req(url: string, method = "GET") {
  const response = await fetch(url, {
    method,
  });
  return await response.json();
}

export { req };

async function nameReq(name: string, method = "GET") {
  await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });
}

export { nameReq };
