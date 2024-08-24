import {useState} from 'react';
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
} from 'semantic-ui-react'

import { Button } from 'semantic-ui-react'

export default function CardExampleCard(props){

	const {
    name,sprites, alt, types , id,
    height, weight, base_experience} = props;
  const [show, setShow] = useState(false);

  // console.log(props)

  const abilities = props.abilities.map((ability) => ability.ability.name).join(", ")
  const index = id
  const imgUrl = sprites.front_default

  const handleClick = () => {
    setShow(!show);
    // console.log(show);
  }

	return (
//     <>
//   <Card>
// <p className="poke-font poke-index">#{index}</p>
//     {imgUrl && <Image src={imgUrl} alt={name} />}
//     <CardContent>

//       <CardHeader >

// 		<p className='poke-font'>{name.toUpperCase()}</p></CardHeader>

//       <CardMeta>
//         <span className='poke-font'>type:{types.map((typeInfo) => typeInfo.type.name).join(", ")}</span>
// 		</CardMeta>
//     <button
//     className="ui fluid button"
//     style={{marginTop : '10px'}}
//     onClick={handleClick}>More info</button>

//     {show &&
//     <CardDescription>
//       <div className='card-details'>
//       <p>Height: {height}</p>
//       <p>Weight: {weight}</p>
//       <p>Ability: {abilities}</p>
//       <p>Base Experience: {base_experience}</p>
//       </div>

//     </CardDescription>
// }

//     </CardContent>
//   </Card>

<>
      <div className="carte-int">
      <p className="poke-font poke-index">#{index}</p>

      {imgUrl && <Image src={imgUrl} alt={name} />}
      <div className="carte-info">
      <div className='detail-text'>
      <p className='poke-font'>{name.toUpperCase()}</p>
      <span className='poke-font detail'>type:{types.map((typeInfo) => typeInfo.type.name).join(", ")}</span>
      </div>
      <button className="carte-btn" onClick={handleClick}>More info</button>
      {show &&
            <div className='poke-font detail'>

            <p>Height: {height}</p>
            <p>Weight: {weight}</p>
            <p>Ability: {abilities}</p>
            <p>Base Experience: {base_experience}</p>
            </div>}
      </div>
    </div>
    </>
)
}
