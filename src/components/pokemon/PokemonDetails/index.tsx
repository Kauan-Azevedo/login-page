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
      <div className={styles.pokemonStats}>
        <h2>Stats:</h2>
        <ul>
          {pokemon.stats.map((stat) => (
            <li key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonDetails;
