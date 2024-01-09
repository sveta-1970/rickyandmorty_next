import Cards from "@/components/Cards";
import {req} from "@/components/services/server.request"

export default async function CharacterName({ params, searchParams }: any) {
  //http://localhost:3000/characters/Ricky?location=1
  //console.log(searchParams); //{location: '1'}

  try {
    const data = await req(
      `https://rickandmortyapi.com/api/character/?name=${params.name}`
    );

    return (
      <div>
        <h1>Character {params.name}</h1>
        <Cards data={data.results} />
      </div>
    );
  } catch (e) {
    console.error(e);
  }
}
