import React, { useEffect, useState } from "react";
import PokemonCard from "../PokemonCard";
import {
  getPokemonListResponse,
  getPokemonDetailsResponse,
} from "../../../api/pokemon/pokemon.response.types";
import styles from "./PokemonList.module.css";

interface PokemonListProps {
  pokemons: getPokemonListResponse["results"];
  onPokemonClick: (pokemonId: number) => void;
}

const PokemonList: React.FC<PokemonListProps> = ({
  pokemons,
  onPokemonClick,
}) => {
  const [pokemonDetails, setPokemonDetails] = useState<
    getPokemonDetailsResponse[]
  >([]);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const details = await Promise.all(
        pokemons.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          return response.json();
        })
      );
      setPokemonDetails(details);
    };

    fetchPokemonDetails();
  }, [pokemons]);

  return (
    <div className={styles.container}>
      {pokemonDetails.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onClick={onPokemonClick}
        />
      ))}
    </div>
  );
};

export default PokemonList;
