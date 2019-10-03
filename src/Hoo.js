import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Hoo() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`).then(response => {
      setPokemon(response.data);
    });
  });

  console.log(pokemon);
  return (
    <div>
      <p>{pokemon.name}</p>
      <div>
        {pokemon.abilities
          ? pokemon.abilities.map(poke => {
              return <div>{poke.ability.name}</div>;
            })
          : ""}
      </div>
      <p>{pokemon.weight}</p>
    </div>
  );
}
