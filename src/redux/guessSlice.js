import { createSlice } from "@reduxjs/toolkit";

const guessSlice = createSlice( {
    name: "guess",
    initialState: [],
    reducers: {
        addCardToGuess( state, action ) {
            return [ ...state, action.payload ];
        },
        removeCardFromGuess( state, action ) {
            return state.filter( card => card !== action.payload );
        },
    }
} );

export const { addCardToGuess, removeCardFromGuess } = guessSlice.actions;
export default guessSlice.reducer;