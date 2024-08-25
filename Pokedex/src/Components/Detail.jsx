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
  margin-top: 3vw;
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
	<Link to={previousPokemonLink}><FontAwesomeIcon icon={faAngleLeft} size="2xl" className="icon-left"/></Link>
	<Link to={nextPokemonLink}><FontAwesomeIcon  icon={faAngleRight} size="2xl" className="icon-right" /></Link>
    <Container>

      <p className="poke-font poke-index">#{id}</p>
      <img style={{width:'232px'}} src={imgUrl} alt={name} />
      <div className="carte-info">
      <div className='detail-text'>
      <p className='poke-font'>{name.toUpperCase()}</p>
      <span className='poke-font detail'>Type: {types.map(typeInfo => typeInfo.type.name).join(", ")}</span>
      <p className="poke-font">Height: {height}</p>
      <p className="poke-font">Weight: {weight}</p>
      <p className="poke-font">Ability: {abilities}</p>
      <p className="poke-font">Base Experience: {base_experience}</p>
      <button className="carte-btn" onClick={playAudio}>Cries</button>
      </div>
      </div>

    </Container>
	</>
  );
};

export default Detail;
