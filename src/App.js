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
  const [playerTwo, setPlayerTwo] = useState({});

  const handleSubmit = () => {
    // Validations
    if(registerForm.nick1.length <= 2 && registerForm.nick2.length <= 2){
      setRegisterForm({ ...registerForm, error: true });
      return;
    }
    if(registerForm.nick1 === registerForm.nick2 && registerForm.nick2 === registerForm.nick1){
      setRegisterForm({ ...registerForm, error: true });  
      return;
    }

    setRegisterForm({ ...registerForm, error: true });  
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
        return <Round players={ players } setView={ setView } />
      case 3: 
        return <Winner setView={ setView } />
      default:
        return <RegisterPlayers registerForm={ registerForm } setRegisterForm={ setRegisterForm } handleSubmit={ handleSubmit } setView={ setView } />
    }
  }

  return (
    <div className="App">
      <header className="header">
        <h1 className="header-title"><Icon name="game"/> CachiPum!</h1>
      </header>
      { handleViews(view) }
    </div>
  );
}

export default App;
