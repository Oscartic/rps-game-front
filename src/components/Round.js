import React, { useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import { getMoves } from '../api';

function Round(props){
    
    const { players, setView } = props;

    const [round, setRound] = useState(1);
    const [moves, setMoves] = useState([]);
    const [p1, setP1] = useState({ id: 0, nick: "", wins: 0, currentMove: "", currentKills: "none1" });
    const [p2, setP2] = useState({ id: 0, nick: "", wins: 0, currentMove: "", currentKills: "none2" });
    const [turn, setTurn] = useState(false);
    const [currentSelectAttack, setCurrentSelectAttack] = useState(false);

    useEffect(() => {
        if(players.length && p1.id === 0){
            setP1({id: players[0][0].id, nick: players[0][0].name, wins: players[0][0].wins, currentMove: "", currentKills: "none1"})
        }
        if(players.length && p2.id === 0){
            setP2({id: players[0][1].id, nick: players[0][1].name, wins: players[0][1].wins, currentMove: "", currentKills: "none1"})
        }
        if(moves.length === 0){
            getMoves().then(res => {
                setMoves(res.data)
            })
        }         
    }, [moves, players, p1, p2]);

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
        setCurrentSelectAttack(!currentSelectAttack);
        if(turn){
            setP2({...p2, currentMove: move, currentKills: kills});
        } else {
            setP1({...p1, currentMove: move, currentKills: kills});
        }        
    } 

    const handleLaunchAttack = () => {
        let currentRound = round;
        setTurn(!turn);
        if(p1.currentKills === p2.currentMove){
            let newPoint = p1.score + 1;
            setP1({...p1, score: newPoint, currentKills: 'none1'})
            setRound(currentRound + 1);
            validateWinRound();
        } else if(p2.currentKills === p1.currentMove) {
            let newPoint = p2.score + 1;
            setP2({...p2, score: newPoint, currentKills: 'none2'})
            setRound(currentRound + 1);
            validateWinRound();
        }
    }

    return(
        <div className={ turn ? 'turn-player-two' : 'turn-player-one'}>
            <h1>Round { round }</h1>
            <h2>{ turn ? `[Player 2] ${p2.nick}` : `[Player 1] ${p1.nick}` } is your turn! </h2>
                
            <div className="all-moves">
                {moves.map((move)=>(
                    <div key={move.move} className={ currentSelectAttack ? 'move selected-move' : 'move'} onClick={() => handleTurn(move.move, move.kills)}>{move.move}</div>
                ))}
            </div>
            
            <div className="send-attack-zone">
                <Button fluid className="btn-turn" color="orange" onClick={() => handleLaunchAttack()}>Launch attack</Button>
            </div>


            <div className="score">
                    <div className="p1-score">
                        <h2>Player One</h2>
                        <p>{ p1.wins }</p>
                        <strong>W on games</strong>
                    </div>
                    <div className="p2-score">
                        <h2>Player Two</h2>
                        <p>{ p2.wins }</p>
                        <strong>Won games</strong>
                    </div>
            </div>
            
        </div>
    );
}

export default Round;