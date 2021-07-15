import { useDispatch, useSelector } from "react-redux";
import { addCardToGuess, removeCardFromGuess } from '../redux/guessSlice';

import { cardName } from "../gameLogic/pokerLogic";

export default function Card( { card } ) {

    const dispatch = useDispatch();

    const currentGuess = useSelector( state => state.guess );

    return <img
        src={ `cards/${ card }.svg` }
        alt={ cardName( card ) }
        className="card-image"
        onClick={ () => dispatch( currentGuess.includes( card ) ? removeCardFromGuess( card ) : addCardToGuess( card ) ) }
    />;

}