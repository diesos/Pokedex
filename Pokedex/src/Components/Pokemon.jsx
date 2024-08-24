import React from "react";
import CardExampleCard from "./Card";
import FetchPokemonById from "../Logic/FetchPokemonById";

const PokemonList = ({ posts, loading, currentPage }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  // Calculate the range of posts to display
  const postsPerPage = 10;
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);


  // console.log("Current posts are:", currentPosts);

  return (
    <>
      {currentPosts.map((data, index) => (
        <div className="list" key={index}>
          {/* {console.log(data.url)} */}
          <FetchPokemonById url={data.url} />
          <br />
        </div>
      ))}
    </>
  );
};

export default PokemonList;
