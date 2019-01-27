import { CHANGE_MENU_SELCTION } from './actionTypes';

export const changeMenuSelection = selection => ({
    type: CHANGE_MENU_SELCTION,
    payload: { selection }
});
