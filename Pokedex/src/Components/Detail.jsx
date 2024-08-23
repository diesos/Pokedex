import { useState } from "react";



const Detail = () => {

	const [pokemonDetail, setPokemonDetail] = useState([]);

	return (

		<>
		<p>Id: {id}</p>
		<p>Name: {name}</p>
		</>

	)


}

export default Detail;
