import { useEffect, useState } from "react";
import { setupAuthListener } from "../api/auth/auth.service";
import { isAuthenticated, signOut } from "../api/auth/auth.service";
import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import "../css/styles.css";

import Navbar from "../components/Navbar";
import Content from "../components/Content";

import PokemonList from "../components/pokemon/PokemonList";
import PokemonDetails from "../components/pokemon/PokemonDetails";
import {
  getPokemonList,
  getPokemonDetails,
} from "../api/pokemon/pokemon.service";
import {
  getPokemonListResponse,
  getPokemonDetailsResponse,
} from "../api/pokemon/pokemon.response.types";

export const Route = createFileRoute("/")({
  beforeLoad: async () => {
    const authenticated = await isAuthenticated();
    if (!authenticated) throw redirect({ to: "/auth" });
  },
  component: HomeComponent,
});

function HomeComponent() {
  const navigate = useNavigate({ from: "/" });

  const [pokemonList, setPokemonList] = useState<getPokemonListResponse | null>(
    null
  );
  const [pokemonDetails, setPokemonDetails] =
    useState<getPokemonDetailsResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const listData = await getPokemonList();
      setPokemonList(listData);

      const detailsData = await getPokemonDetails(1);
      setPokemonDetails(detailsData);
    };

    fetchData();
    const unsubscribe = setupAuthListener();
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Navbar />
      <Content>
        <h1>Pokémon Data</h1>
        {pokemonList && <PokemonList data={pokemonList} />}
        {pokemonDetails && <PokemonDetails data={pokemonDetails} />}
      </Content>
    </div>
  );
}

export default HomeComponent;
