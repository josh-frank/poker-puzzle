import { useSelector } from "react-redux";
import { cardName } from "../gameLogic/pokerLogic";

export default function GuessDisplay() {

    const currentGuess = useSelector( state => state.guess );

    return <textarea
        className="guess-display"
        disabled
        value={ currentGuess.map( cardName ).join( "\n" ) }
    >
    </textarea>;

}