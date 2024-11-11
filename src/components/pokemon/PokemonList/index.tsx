import React from "react";
import { getPokemonListResponse } from "../../../api/pokemon/pokemon.response.types";
import styles from "./PokemonList.module.css";

interface PokemonListProps {
  data: getPokemonListResponse;
}

const PokemonList: React.FC<PokemonListProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      <h2>Pokémon List</h2>
      <ul>
        {data.results.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
