import { Link } from 'react-router-dom';
import Search from './Search';
import FetchPokemon from '../Logic/FetchPokemon';

export default function Nav() {


	  return (
		<div className='nav-bar'>
		<nav>
	  <ul>
		<li>
			<Link to="/">
		  Pokedex
		  </Link>
		</li>
	  </ul>
	  <Search />
	</nav>
	</div>
  );
}
