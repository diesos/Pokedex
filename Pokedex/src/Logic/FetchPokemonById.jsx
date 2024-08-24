import { useEffect, useState } from "react";
import CardExampleCard from "../Components/Card";

const FetchPokemonById = ({url}) => {
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
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
  }, [url]); // Depend on pokemonId to refetch if it changes

  if (loading) {
    return <h1>Loading...</h1>;
  }


  if (!pokemonData) {
    return <p>No Pokémon data available</p>;
  }

  return (
          <CardExampleCard
        {...pokemonData}
    />
  );
};

export default FetchPokemonById;
