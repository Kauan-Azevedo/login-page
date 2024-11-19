import React from "react";
import styles from "./PokemonCard.module.css";
import { getPokemonDetailsResponse } from "../../../api/pokemon/pokemon.response.types";

interface PokemonCardProps {
  pokemon: getPokemonDetailsResponse;
  onClick: (pokemonId: number) => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, onClick }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card} onClick={() => onClick(pokemon.id)}>
        <div className={styles.front}>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className={styles.pokemonImage}
          />
          <h2 className={styles.pokemonName}>{pokemon.name}</h2>
        </div>
        <div className={styles.back}>
          <div className={styles.pokemonBack}>
            <img
              src={pokemon.sprites.back_default}
              alt={pokemon.name}
              className={styles.pokemonImage}
            />
            <h2 className={styles.pokemonName}>{pokemon.name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
