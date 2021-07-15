import { createSlice } from "@reduxjs/toolkit";
import { fullDeck } from "../gameLogic/pokerLogic";

const boardSlice = createSlice( {
    name: "board",
    initialState: null,
    reducers: {
        newBoard() {
            const deck = fullDeck( true );
            return [
              deck.slice( 0, 4 ),
              deck.slice( 4, 8 ),
              deck.slice( 8, 12 ),
              deck.slice( 12, 16 ),
            ];
        },
    }
} );

export const { newBoard } = boardSlice.actions;
export default boardSlice.reducer;