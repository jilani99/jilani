import { ADD_TODO, DELETE_TODO, DONE_TODO, EDIT_TODO } from "./actionsType";

export const add = (newItem) => {
    return {
        type: ADD_TODO,
        payload: newItem,
    };
};

export const deletee = (id) => {
    return {
        type: DELETE_TODO,
        payload: id,
    };
};
export const edit = (payload) => {
    return {
        type: EDIT_TODO,
        payload,
    };
};
export const done = (id) => {
    return {
        type: DONE_TODO,
        payload: id,
    };
};
