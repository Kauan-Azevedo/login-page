import React from "react";
import styles from "./PokemonDetails.module.css";
import { getPokemonDetailsResponse } from "../../../api/pokemon/pokemon.response.types";

interface PokemonDetailsProps {
  pokemon: getPokemonDetailsResponse;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemon }) => {
  const playAudio = (audioUrl: string) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div className={styles.detailsContainer}>
      <h1 className={styles.pokemonName}>{pokemon.name}</h1>
      <div className={styles.pokemonContent}>
        <div className={styles.pokemonColumn}>
          <div className={styles.pokemonSprites}>
            <h2>Sprites:</h2>
            <img
              src={pokemon.sprites.front_default}
              alt={`${pokemon.name} front`}
            />
            <img
              src={pokemon.sprites.back_default}
              alt={`${pokemon.name} back`}
            />
            <h2>Shiny Sprites:</h2>
            <img
              src={pokemon.sprites.front_shiny}
              alt={`${pokemon.name} shiny front`}
            />
            <img
              src={pokemon.sprites.back_shiny}
              alt={`${pokemon.name} shiny back`}
            />
          </div>
          <div className={styles.pokemonAudio}>
            <button onClick={() => playAudio(pokemon.cries.latest)}>
              Play Latest Cry
            </button>
            <button onClick={() => playAudio(pokemon.cries.legacy)}>
              Play Legacy Cry
            </button>
          </div>
        </div>

        <div className={styles.pokemonColumn}>
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
                  <span>
                    {ability.ability.name} {ability.is_hidden && "(Hidden)"}
                  </span>
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
        </div>

        <div className={styles.pokemonColumn}>
          <div className={styles.pokemonForms}>
            <h2>Forms:</h2>
            <ul>
              {pokemon.forms.map((form) => (
                <li key={form.name}>{form.name}</li>
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
      </div>
    </div>
  );
};

export default PokemonDetails;
