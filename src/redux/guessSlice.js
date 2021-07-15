import { createSlice } from "@reduxjs/toolkit";

const guessSlice = createSlice( {
    name: "guess",
    initialState: [],
    reducers: {
        clearGuess() { return []; },
        addCardToGuess( state, action ) {
            return [ ...state, action.payload ];
        },
        removeCardFromGuess( state, action ) {
            return state.filter( card => card !== action.payload );
        },
    }
} );

export const { clearGuess, addCardToGuess, removeCardFromGuess } = guessSlice.actions;
export default guessSlice.reducer;