export function todoReducer(state, action) {
    switch (action.type) {
        case "TOGGLE_TODO":
            const newState = [...state];
            const id = action.payload.id;
            return newState.map((value) => {
                if (value.id === id) {
                    return {
                        id,
                        text: value.text,
                        done: !value.done
                    };
                }

                return value
            })
        case "ADD_TODO":
            const newTodo = {
                id: Date.now(), // 使用时间戳作为唯一ID
                text: action.payload.text,
                done: false
            };
            return [...state, newTodo];
        case "DELETE_TODO":
            return state.filter((todo) => todo.id !== action.payload.id);
        default:
            return state;
    }
}