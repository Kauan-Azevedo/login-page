// Components/PokemonDetails.tsx
import React from "react";
import { getPokemonDetailsResponse } from "../../../api/pokemon/pokemon.response.types";
import styles from "./PokemonDetails.module.css";

interface PokemonDetailsProps {
  data: getPokemonDetailsResponse;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      <h2>{data.name}</h2>
      <p>Height: {data.height}</p>
      <p>Weight: {data.weight}</p>
      <h3>Types:</h3>
      <ul>
        {data.types.map((typeInfo, index) => (
          <li key={index}>{typeInfo.type.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonDetails;
