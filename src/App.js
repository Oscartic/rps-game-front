import React, { useState } from 'react';
import RegisterPlayers from './components/RegisterPlayers';
import Round from './components/Round';
import Winner from './components/Winner';
import { Icon } from 'semantic-ui-react';
import { postPlayers } from './api';

function App() {
  
  const [view, setView] = useState(1);
  const [registerForm, setRegisterForm] = useState({nick1: "", nick2:"", error: false}); 
  const [players, setPlayers] = useState([]);
  const [winner, setWinner] = useState({id: 0, playerWinner: '', isWinner: false});

  const handleSubmit = () => {
    // Validations
    let name1 = registerForm.nick1;
    let name2 = registerForm.nick2;
    if(name1.length < 2){
      setRegisterForm({ ...registerForm, error: true });
      return;
    }
    if(name2.length < 2){
      setRegisterForm({ ...registerForm, error: true });
      return;
    }

    if(name1 === name2 && name2 === name1){
      setRegisterForm({ ...registerForm, error: true });  
      return;
    }

    setRegisterForm({ ...registerForm, error: false });  
    setView(2);

    const newPlayers = { name_p1: registerForm.nick1, name_p2: registerForm.nick2 }
    postPlayers(newPlayers).then(res => {
      setPlayers([res.data.data])
    })
}

  
  const handleViews = (view) => {
    switch (view){
      case 1: 
        return <RegisterPlayers registerForm={ registerForm } setRegisterForm={ setRegisterForm } handleSubmit={ handleSubmit } setView={ setView } />
      case 2: 
        return <Round players={ players } winner={ winner } setWinner={ setWinner } setView={ setView } />
      case 3: 
        return <Winner winner={ winner } setWinner={ setWinner } setView={ setView } setRegisterForm={ setRegisterForm } />
      default:
        return <RegisterPlayers registerForm={ registerForm } setRegisterForm={ setRegisterForm } handleSubmit={ handleSubmit } setView={ setView } />
    }
  }

  return (
    <div className="App">
      <header className="header">
        <h1 className="header-title"><Icon name="game"/> Rock, Paper or Scissors Game</h1>
      </header>
      { handleViews(view) }
    </div>
  );
}

export default App;
