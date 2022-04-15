// importation
import { ADD_TODO, DONE_TODO, EDIT_TODO } from "../actionsType";
import { DELETE_TODO } from "../actionsType";

// initilae state
const initialeState = {
    tasks: [{ task: "task1", id: 1, Done: false }],
};

// pure function
const reducerTodo = (state = initialeState, action) => {
    let { type, payload } = action;
    switch (type) {
        case ADD_TODO:
            return { ...state, tasks: [...state.tasks, payload] };
        case DELETE_TODO:
            return {
                ...state,
                tasks: state.tasks.filter((el) => el.id !== payload),
            };
        case EDIT_TODO:
            return {
                ...state,
                tasks: state.tasks.map((el) =>
                    el.id == payload.id ? { ...el, task: payload.task } : el
                ),
            };
        case DONE_TODO:
            return {
                ...state,
                tasks: state.tasks.map((el) =>
                    el.id == payload ? { ...el, Done: !el.Done } : el
                ),
            };

        default:
            return state;
    }
};
export default reducerTodo;
