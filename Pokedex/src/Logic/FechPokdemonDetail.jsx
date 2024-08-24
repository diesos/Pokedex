import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "../Components/Detail";

const FetchPokemonDetail = () => {
const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // console.log(data);
        setPokemonData(data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }
    fetchData();
  }, [id]); // Depend on pokemonId to refetch if it changes

  if (loading) {
    return <h1>Loading...</h1>;
  }


  if (!pokemonData) {
    return <p>No Pokémon data available</p>;
  }

  return (
    <>
          <Detail
        {...pokemonData}
    />
    </>
  );
};

export default FetchPokemonDetail;
