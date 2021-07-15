import { useDispatch, useSelector } from "react-redux";
import { addCardToGuess, removeCardFromGuess } from '../redux/guessSlice';

import { cardName } from "../gameLogic/pokerLogic";

export default function Card( { card } ) {

    const dispatch = useDispatch();

    const currentGuess = useSelector( state => state.guess );
    const isChosen = currentGuess.includes( card );

    return <div className={ isChosen ? "card-image-wrapper chosen" : "card-image-wrapper" }>
        <img
            src={ `cards/${ card }.svg` }
            alt={ cardName( card ) }
            onClick={ () => dispatch( isChosen ? removeCardFromGuess( card ) : addCardToGuess( card ) ) }
        />
    </div>;

}