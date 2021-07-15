import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "./boardSlice"
import guessReducer from "./guessSlice"

const store = configureStore( {
    reducer: {
        board: boardReducer,
        guess: guessReducer,
    }
  } );

export default store;
