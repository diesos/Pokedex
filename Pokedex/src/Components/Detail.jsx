import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Detail = (props) => {
  const {
    name, sprites, alt, types, id,
    height, weight, base_experience, cries
  } = props;

  const abilities = props.abilities.map((ability) => ability.ability.name).join(", ");
  const imgUrl = sprites.front_default;
  const cryRef = useRef(new Audio(cries.legacy));

  const playAudio = () => {
    const audio = cryRef.current;
    audio.play().catch(error => {
      console.error("Failed to play the audio:", error);
    });
  };

  const nextPokemon = () => {
	return id < 151 ? id + 1 : null;
  }

  const previousPokemon = () => {
	return id > 1 ? id - 1 : null
  }

  const nextPokemonLink = nextPokemon() ? `/detail/${nextPokemon()}` : "#";
  const previousPokemonLink = previousPokemon() ? `/detail/${previousPokemon()}` : "#";
  return (
	<>
	<Link to={previousPokemonLink}><FontAwesomeIcon icon={faAngleLeft} size="2xl" style={{color: "#F12B2B",position:'absolute', left:'Opx', top:'50%', width:'120px', height:'200px'}} /></Link>
	<Link to={nextPokemonLink}><FontAwesomeIcon icon={faAngleRight} size="2xl" style={{color: "#F12B2B",position:'absolute',top:'50%', right:'0px', width:'120px', height:'200px'}} /></Link>
    <Container>
      <p className="poke-font poke-index">#{id}</p>
      <img src={imgUrl} alt={name} />
      <p className='poke-font'>{name.toUpperCase()}</p>
      <span className='poke-font detail'>Type: {types.map(typeInfo => typeInfo.type.name).join(", ")}</span>
      <p className="poke-font">Height: {height}</p>
      <p className="poke-font">Weight: {weight}</p>
      <p className="poke-font">Ability: {abilities}</p>
      <p className="poke-font">Base Experience: {base_experience}</p>
      <button onClick={playAudio}>Cries</button>
    </Container>
	</>
  );
};

export default Detail;
