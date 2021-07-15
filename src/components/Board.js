import { useSelector } from "react-redux";
import { bestHand } from "../gameLogic/boardLogic";
import { cardName, handRank, handValue } from "../gameLogic/pokerLogic";

export default function Board() {

    const board = useSelector( state => state.board );

    const currentBestHand = bestHand( board, 5 );

    console.log( currentBestHand.map( cardName ), handRank( currentBestHand ), handValue( currentBestHand ) );

    return <div className="board">
        { board.map( ( row, index ) => <div
            key={ index }
            className="boardRow"
        >
            { row.map( ( card, index ) => <div
                key={ index }
                className="boardCell"
            >
                <img
                    src={ `cards/${ card }.svg` }
                    alt={ cardName( card ) }
                    className="card-image"
                />
            </div> ) }
        </div> ) }
    </div>;

}