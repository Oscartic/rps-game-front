import Axios from "axios";

//const baseUrl =  'http://localhost:3000/api/v1';
const baseUrl =  'https://rps-game-api.herokuapp.com/api/v1';

export function postPlayers(object) {
    return Axios.post(baseUrl + '/players/create_round_players', object)
}

export function putPlayerWins(id) {
    return Axios.put(baseUrl + '/players/win_round' ,id)
}

export function getMoves() {
    return Axios.get(baseUrl + '/moves')
}