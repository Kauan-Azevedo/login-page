import React from "react";
import styles from "./PokemonDetails.module.css";
import { getPokemonDetailsResponse } from "../../../api/pokemon/pokemon.response.types";

interface PokemonDetailsProps {
  pokemon: getPokemonDetailsResponse;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemon }) => {
  return (
    <div className={styles.detailsContainer}>
      <h1 className={styles.pokemonName}>{pokemon.name}</h1>
      <div className={styles.pokemonSprites}>
        <img
          src={pokemon.sprites.front_default}
          alt={`${pokemon.name} front`}
        />
        <img src={pokemon.sprites.back_default} alt={`${pokemon.name} back`} />
      </div>
      <div className={styles.pokemonStats}>
        <h2>Stats:</h2>
        <ul>
          {pokemon.stats.map((stat) => (
            <li key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat} ({stat.effort})
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.pokemonAbilities}>
        <h2>Abilities:</h2>
        <ul>
          {pokemon.abilities.map((ability) => (
            <li key={ability.ability.name}>
              {ability.ability.name} {ability.is_hidden && "(Hidden)"}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.pokemonTypes}>
        <h2>Types:</h2>
        <ul>
          {pokemon.types.map((type) => (
            <li key={type.type.name}>{type.type.name}</li>
          ))}
        </ul>
      </div>
      <div className={styles.pokemonMoves}>
        <h2>Moves:</h2>
        <ul>
          {pokemon.moves.map((move) => (
            <li key={move.move.name}>{move.move.name}</li>
          ))}
        </ul>
      </div>
      <div className={styles.pokemonMisc}>
        <h2>Miscellaneous:</h2>
        <p>Base Experience: {pokemon.base_experience}</p>
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
      </div>
    </div>
  );
};

export default PokemonDetails;
