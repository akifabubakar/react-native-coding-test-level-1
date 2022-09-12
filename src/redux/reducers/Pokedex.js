import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  getPokemon,
  getPokemonSprite,
  listPokemon,
} from "../../services/Pokedex";

const initialState = {
  listLoading: true,
  detailsLoading: true,
  error: null,
  pokemons: [],
  pokemonDetail: {},
  offset: 0,
};

export const getPokemons = createAsyncThunk(
  "pokedex/getPokemons",
  async (offset) => {
    try {
      const resp = await listPokemon(offset);
      const pokemons = (await resp.json()).results;

      const promises = [];

      pokemons.forEach(({ name }) => {
        promises.push(getPokemonSprite(name));
      });

      const sprites = await Promise.all(promises);

      const lists = [];
      const spritePromises = [];

      sprites.forEach((element) => {
        spritePromises.push(element.json());
      });

      const spritesJson = await Promise.all(spritePromises);

      spritesJson.forEach((eachSprite) => {
        const {
          name,
          sprites: { front_default },
          id,
        } = eachSprite;

        lists.push({
          name,
          imageUrl: front_default,
          id,
        });
      });

      return lists;
    } catch (error) {
      return error;
    }
  },
);

export const getPokemonDetail = createAsyncThunk(
  "pokedex/getPokemonDetail",
  async (pokemonName) => {
    try {
      const resp = await getPokemon(pokemonName);
      const {
        name,
        abilities,
        height,
        weight,
        sprites: { front_default },
        types,
        stats,
        id,
      } = await resp.json();
      const extractedTypes = types.map(({ type }) => type.name);

      const extractedStats = stats.map(({ base_stat, stat }) => {
        let statName = stat.name;
        if (statName === "special-attack") {
          statName = "s.att";
        }
        if (statName === "special-defense") {
          statName = "s.def";
        }
        return { label: statName, value: base_stat };
      });

      return {
        name,
        ability: abilities[0]?.ability?.name || "Not Found",
        height,
        weight,
        imageUrl: front_default,
        types: extractedTypes,
        stats: extractedStats,
        id,
      };
    } catch (error) {
      return error;
    }
  },
);

const { actions, reducer } = createSlice({
  name: "pokedex",
  initialState,
  reducers: {
    clearPokedex: (state) => {
      state.pokemons = [];
      state.offset = 0;
    },
    clearDetail: (state) => {
      state.pokemonDetail = {};
      state.detailsLoading = true;
    },
  },
  extraReducers: {
    // List Pokemons Reducer
    [getPokemons.fulfilled]: (state, { payload }) => {
      state.listLoading = false;
      state.error = null;

      state.pokemons.push(...payload);
      state.offset = state.pokemons.length;
    },
    [getPokemons.pending]: (state) => {
      state.listLoading = true;
    },
    [getPokemons.rejected]: (state, action) => {
      state.listLoading = false;
      state.error = action.error;
    },

    // Get Pokemon Details Reducer
    [getPokemonDetail.fulfilled]: (state, { payload }) => {
      state.detailsLoading = false;
      state.error = null;

      state.pokemonDetail = payload;
    },
    [getPokemonDetail.pending]: (state) => {
      state.detailsLoading = true;
    },
    [getPokemonDetail.rejected]: (state, action) => {
      state.detailsLoading = false;
      state.error = action.error;
    },
  },
});

export const { clearPokedex, clearDetail } = actions;

export default reducer;
