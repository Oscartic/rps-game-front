import React from 'react';
import { Form, Input, Button, Icon } from 'semantic-ui-react';
import blue from '../assets/blue.png';
import red from '../assets/red.png';
function RegisterPlayers(props){

    const { registerForm, setRegisterForm, handleSubmit } = props;

    return(
        <div className="container-register-winner">
            <h2>Enter Players nicknames</h2>
            { registerForm.error ? <div className="alert"><Icon name="exclamation" /> Each nickName must have more than two characters and must be different.</div> : "" }
            <Form onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                    <div><img src={blue} alt="Player One"/></div>
                    <Form.Field 
                        control={Input}
                        label="Player 1"
                        placeholder='Nick Name P1'
                        value={ registerForm.nick1 }
                        onChange={e => setRegisterForm({...registerForm, nick1: e.target.value})}
                    />
                    <div><img src={red} alt="Player One"/></div>
                    <Form.Field
                        control={Input}
                        label='Player 2'
                        value={ registerForm.nick2 }
                        placeholder='Nick Name P2'
                        onChange={e => setRegisterForm({ ...registerForm, nick2: e.target.value })}
                    />
                </Form.Group>
                <Form.Field fluid control={Button} color="red">Start Game!</Form.Field>
            </Form>
        </div>
    );

}
export default RegisterPlayers;