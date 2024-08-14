import Search from './Search';

export default function Nav() {


	  return (
		<div className='nav-bar'>
		<nav>
	  <ul>
		<li>
		  Home
		</li>
		<li>
		  Pokedex
		</li>
	  </ul>
	  <Search />
	</nav>
	</div>
  );
}
