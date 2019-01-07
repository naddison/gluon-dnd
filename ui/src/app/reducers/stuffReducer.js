import initialState from './initialState';
import { FETCH_STUFF, RECEIVE_STUFF } from '../actions/actionType';

export default function stuff(state = initialState.stuff, action) {
    let newState;

    switch (action.type) {
    case FETCH_STUFF:
        console.info('Fetching Stuff');
        return action;
    case RECEIVE_STUFF:
        newState = action.stuff;
        console.info('Receiving Stuff...');
        return newState;
    default:
        return state;
    }
}
