import React, { useState } from 'react';

function Round(props){
    
    const { playerOne, playerTwo, setView } = props;

    
    const [round, setRound] = useState(1);
    const [moves, setMoves] = useState([{move: 'paper', kills: 'rock'}, {move: 'rock', kills: 'scissors'}, {move: 'scissors', kills: 'paper'}]);
    const [p1, setP1] = useState({ nick: playerOne, score: 0, currentMove: "", currentKills: "none1" });
    const [p2, setP2] = useState({ nick: playerTwo, score: 0, currentMove: "", currentKills: "none2" });
    const [turn, setTurn] = useState(false);

    const validateWinRound = () => {
        if(p1.score === 3){
            alert("p1 es el ganador!");
            setView(3);
            return;
        }
        if(p2.score === 3){
            alert("p2 es el ganador!");
            setView(3);
            return;
        }
        
    }
    const handleTurn = (move, kills) => {
        let currentRound = round;
        setTurn(!turn);
        if(turn){
            setP2({...p2, currentMove: move, currentKills: kills});
        } else {
            setP1({...p1, currentMove: move, currentKills: kills});
            if(p1.currentKills === p2.currentMove){
                let newPoint = p1.score + 1;
                setP1({...p1, score: newPoint})
                setRound(currentRound + 1);
            } else if(p2.currentKills === p1.currentMove) {
                let newPoint = p2.score + 1;
                setP2({...p2, score: newPoint})
            }
        }     
        validateWinRound();
    } 
    return(
        <div className={ turn ? 'turn-player-two' : 'turn-player-one'}>
            <h1>Round { round }</h1>
            <h2>{ turn ? `[Player 2] ${p2.nick}` : `[Player 1] ${p1.nick}` } is your turn! </h2>
                
            <div className="all-moves">
                {moves.map((move)=>(
                    <div key={move.move} className="move" onClick={() => handleTurn(move.move, move.kills)}>{move.move}</div>
                ))}
            </div>
            <div className="score">
                    <div className="p1-score">
                        <h2>Player One</h2>
                        <p>{p1.score}</p>
                        <strong>W on games</strong>
                    </div>
                    <div className="p2-score">
                        <h2>Player Two</h2>
                        <p>{p2.score}</p>
                        <strong>Won games</strong>
                    </div>
            </div>
        </div>
    );
}

export default Round;