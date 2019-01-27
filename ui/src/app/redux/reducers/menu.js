import { CHANGE_MENU_SELCTION } from '../actionTypes';

const initialState = {
    menuSelection: 'battle_page'
};

export default function(state = initialState, action) {
    switch (action.type) {
    case CHANGE_MENU_SELCTION: {
        const { selection } = action.payload;

        return {
            ...state,
            menuSelection: selection
        };
    }

    default:
        return state;
    }
}
