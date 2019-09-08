import React, { useState } from 'react';
import RegisterPlayers from './components/RegisterPlayers';

function App() {
  
  const [view, setView] = useState(1);
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [registerForm, setRegisterForm] = useState(true); 

  
  const handleViews = (view) => {
    switch (view){
      case 1: 
        return <RegisterPlayers setPlayerOne={ setPlayerOne } setPlayerTwo={ setPlayerTwo } setRegisterForm={ setRegisterForm } setView={ setView } />
      case 2: 
        return "A Jugar"
      default:
        return <RegisterPlayers setPlayerOne={ setPlayerOne } setPlayerTwo={ setPlayerTwo } setRegisterForm={ setRegisterForm } />
    }
  }


  return (
    <div className="App">
      <h1>CachiPum!</h1>
      { handleViews(view) }
    </div>
  );
}

export default App;
