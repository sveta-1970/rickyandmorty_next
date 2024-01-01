/*"characters": "https://rickandmortyapi.com/api/character"
{
  "characters": "https://rickandmortyapi.com/api/character",
  "locations": "https://rickandmortyapi.com/api/location",
  "episodes": "https://rickandmortyapi.com/api/episode"
}
*/


async function req(url: string, method = "GET") {
  const response = await fetch(url, {
    method,
  });
  return await response.json();
}

export {req}

