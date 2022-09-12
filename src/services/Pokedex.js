import { BASE_URL } from "../../config.json";

export const listPokemon = async (offset) =>
  fetch(`${BASE_URL}/pokemon/?limit=10&offset=${offset}`);

export const getPokemonSprite = async (name) =>
  fetch(`${BASE_URL}/pokemon-form/${name}`);

export const getPokemon = async (name) => fetch(`${BASE_URL}/pokemon/${name}`);
