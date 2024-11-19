import { api } from "../api";
import {
  getPokemonAbilityResponse,
  getPokemonDetailsResponse,
  getPokemonListResponse,
  getPokemonMoveResponse,
  getPokemonSpeciesResponse,
  getPokemonTypeResponse,
  getPokemonsTypesResponse,
} from "./pokemon.response.types";

export async function getPokemonList(
  offset = 0,
  limit = 20
): Promise<getPokemonListResponse> {
  const response = await api.get<getPokemonListResponse>(
    `/pokemon/?offset=${offset}&limit=${limit}`
  );
  return response.data;
}

export async function getPokemonDetails(
  id: number
): Promise<getPokemonDetailsResponse> {
  const response = await api.get<getPokemonDetailsResponse>(`/pokemon/${id}`);
  return response.data;
}

export async function getPokemonSpecies(
  id: number
): Promise<getPokemonSpeciesResponse> {
  const response = await api.get<getPokemonSpeciesResponse>(
    `/pokemon-species/${id}`
  );
  return response.data;
}

export async function getPokemonAbility(
  id: number
): Promise<getPokemonAbilityResponse> {
  const response = await api.get<getPokemonAbilityResponse>(`/ability/${id}`);
  return response.data;
}

export async function getPokemonType(
  id: number
): Promise<getPokemonTypeResponse> {
  const response = await api.get<getPokemonTypeResponse>(`/type/${id}`);
  return response.data;
}

export async function getPokemonMove(
  id: number
): Promise<getPokemonMoveResponse> {
  const response = await api.get<getPokemonMoveResponse>(`/move/${id}`);
  return response.data;
}

export async function getPokemonsTypes(): Promise<getPokemonsTypesResponse> {
  const response = await api.get<getPokemonsTypesResponse>("/type");
  return response.data;
}
