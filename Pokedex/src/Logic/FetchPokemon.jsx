import { useState, useEffect } from "react";
import PokemonList from "../Components/Pokemon";

export default function FetchPokemon() {
  const [loading, setLoading] = useState(false);
  const [pokemonData, setPokemonData] = useState(() => {
    // Load from localStorage on initial render
    const storedData = localStorage.getItem("pokemon");
    return storedData ? JSON.parse(storedData) : null;
  });

  useEffect(() => {
    if (!pokemonData) {
      setLoading(true);
      const fetchPokemons = async () => {
        try {
          const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon?limit=151"
          );
          const data = await response.json();
        //   console.log("Api data reached SUCCESSFULLY");
          setPokemonData(data); // Update state with the fetched data
          localStorage.setItem("pokemon", JSON.stringify(data));
          setLoading(false); // Save to localStorage
        } catch (error) {
          console.error("Error:", error);
        }
      };

      fetchPokemons();
    }
  }, [pokemonData]);
//   console.log(pokemonData);
//   console.log(pokemonData.results.length);
//   console.log(loading);

  const paginationNumbers = [];
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  for (
    let i = 1;
    i <= Math.ceil((pokemonData?.results.length || 0) / postsPerPage);
    i++
  ) {
    paginationNumbers.push(i);
  }
  const handleClick = (event) => {
    setCurrentPage(Number(event.target.textContent));
  };
//   console.log(currentPage);
  // Render logic or return data as needed
  return (
    <>
      <div>
        {pokemonData ? (
          <div className="pokemon-list">
            <PokemonList
              posts={pokemonData.results}
              loading={loading}
              currentPage={currentPage}
              postsPerPage={postsPerPage}
            />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="pagination">
        {paginationNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={currentPage === pageNumber ? "active" : ""}
            onClick={handleClick}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </>
  );
}
