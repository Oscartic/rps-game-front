import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

function RegisterPlayers(props){

    const { registerForm, setRegisterForm, handleSubmit } = props;

    return(
        <div>
            <h2>Ingresar Nombre de los jugadores</h2>
            { registerForm.error ? <div>Cada nickName debe tener mas de dos caracteres y deben ser diferentes</div> : "" }
            <Form onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Field 
                        control={Input}
                        label='Player 1'
                        placeholder='Nick Name P1'
                        value={ registerForm.nick1 }
                        onChange={e => setRegisterForm({...registerForm, nick1: e.target.value})}
                    />
                    <Form.Field
                        control={Input}
                        label='Player 2'
                        value={ registerForm.nick2 }
                        placeholder='Nick Name P2'
                        onChange={e => setRegisterForm({ ...registerForm, nick2: e.target.value })}
                    />
                </Form.Group>
                <Form.Field control={Button}>Start</Form.Field>
            </Form>
        </div>
    );

}
export default RegisterPlayers;