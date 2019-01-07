import * as types from './actionType';

export const receiveStuff = (json) => {
    return {
        type: types.RECEIVE_STUFF,
        stuff: 'some stuff'
    };
};

export const fetchStuff = () => {
    return dispatchEvent(receiveStuff('hallo'));
};
