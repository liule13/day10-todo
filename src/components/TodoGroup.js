import { useContext } from "react";
import { TodoItem } from "./TodoItem";

import { TodoContext } from "../contexts/TodoContext";

export function TodoGroup() {
    const { state } = useContext(TodoContext)
    return (
        <div className="todo-group">
            {state.length === 0 ? (
                <p>Add the things you need to do today...</p>
            ) : (
                state.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))
            )}
        </div>
    );
}