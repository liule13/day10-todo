import { useContext } from "react";
import { TodoItem } from "./TodoItem";

import { TodoContext } from "../contexts/TodoContext";

export function TodoGroup(props) {
    const { state } = useContext(TodoContext)
    return (
        <div className="todo-group">
            {state.length === 0 ? (
                <p>Add the things you need to do today...</p>
            ) : (
                props.todos.map((item) => (
                    <TodoItem key={item.id} todo={item} />
                ))
            )}
        </div>
    );
}