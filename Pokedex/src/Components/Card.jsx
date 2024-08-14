import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
} from 'semantic-ui-react'

export default function CardExampleCard(props){

	const {pokeName, imgUrl, alt, type} = props;

	// <CardExampleCard
    // name={pokemonData.name}
    // imgUrl={pokemonData.sprites.front_default}
    // alt={pokemonData.name}
    // type={pokemonData.types.map((typeInfo) => typeInfo.type.name).join(", "})
    // />
	return (
  <Card>
    {imgUrl && <Image src={imgUrl} alt={alt} />}
    <CardContent>
      <CardHeader>{pokeName}</CardHeader>

      <CardMeta>
        <span className='date'>{type}</span>
		</CardMeta>
    </CardContent>
  </Card>
)
}
