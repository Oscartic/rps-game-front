import React, { useState } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

function RegisterPlayers(props){

    const { setPlayerOne, setPlayerTwo, setRegisterForm, setView } = props;

    const [nickNameP1, setNickNameP1] = useState("");
    const [nickNameP2, setNickNameP2] = useState("");
    const [error, setError] = useState(false);
    const handleSubmit = () => {
        // Validations
        if(nickNameP1.length <= 2 && nickNameP2.length <= 2){
            setError(true);
            return;
        }
        if(nickNameP1 === nickNameP2){
            setError(true);   
            return;
        }

        setError(false);
        setPlayerOne(nickNameP1);
        setPlayerTwo(nickNameP2);
        setRegisterForm(false);
        setView(2);

    }

    return(
        <div>
            <h2>Ingresar Nombre de los jugadores</h2>
            {error ? <div>Cada nickName debe tener mas de dos caracteres y deben ser diferentes</div> : ""}
            <Form onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Field 
                        control={Input}
                        label='Player 1'
                        placeholder='Nick Name P1'
                        value={nickNameP1}
                        onChange={e => setNickNameP1(e.target.value)}
                    />
                    <Form.Field
                        control={Input}
                        label='Player 2'
                        value={nickNameP2}
                        placeholder='Nick Name P2'
                        onChange={e => setNickNameP2(e.target.value)}
                    />
                </Form.Group>
                <Form.Field control={Button}>Start</Form.Field>
            </Form>
        </div>
    );

}
export default RegisterPlayers;