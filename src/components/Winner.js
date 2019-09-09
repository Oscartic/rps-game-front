import React, {useEffect} from 'react';
import Emperor from '../assets/emperor.jpg';
import { putPlayerWins } from '../api';

function Winner(props) {

    const { setView, winner, setWinner, setRegisterForm } = props;

    const handleInitReturn = () => {
        setRegisterForm({nick1: "", nick2:"", error: false});
        setWinner({ id: 0, playerWinner: "", isWinner: false });
        setView(1);
    }
    useEffect(()=> {
        if(winner.isWinner){
            console.log("Wena Wena Champion!")
            const objId = {id: winner.id}
            putPlayerWins(objId).then(res=>{ console.log(res) })
        }
    },[winner]);
    return(
        <div className="container-register-winner">
            <img className="emperor" src={Emperor} alt="You're a new Emperor"/>
            <h1>We have a WINNER!!</h1>
            <h2>Player [{winner.playerWinner}] is the new EMPEROR! </h2>
            <div  className="return-new-players" onClick={() => handleInitReturn()}>Play Again</div>
        </div>
    );
}

export default Winner; 