export function todoReducer(state, action) {
    switch (action.type) {
        case "LOAD_TODOS":
            return action.payload;
        case "UPDATE_TODO":
            return state.map((todo) =>
                todo.id === action.payload.id ? action.payload : todo
            );
        case "ADD_TODO":
            return [...state, action.payload];
        case "DELETE_TODO":
            return state.filter((todo) => todo.id !== action.payload.id);
        default:
            return state;
    }
}