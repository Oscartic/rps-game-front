import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
function RegisterPlayers(){

    return(
        <div>
            <h2>Ingresar Nombre de los jugadores</h2>
            <Form>
                <Form.Group widths='equal'>
                    <Form.Field
                        control={Input}
                        label='Player 1'
                        placeholder='P1'
                        //onChange={}
                    />
                    <Form.Field
                        control={Input}
                        label='Player 2'
                        placeholder='P2'
                        //onChange={}
                    />
                </Form.Group>
                <Form.Field control={Button}>Start</Form.Field>
            </Form>
        </div>
    );

}
export default RegisterPlayers;