import { configureStore } from "@reduxjs/toolkit";

import pokedexReducer from "./reducers/Pokedex";

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    pokedex: pokedexReducer,
  },
});
