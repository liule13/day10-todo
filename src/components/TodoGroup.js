import { useContext } from "react";
import { TodoItem } from "./TodoItem";

import { TodoContext } from "../contexts/TodoContext";
import { AddTodoForm } from "./AddTodoItem";

export function TodoGroup() {
    const { state } = useContext(TodoContext)
    return (
        <div className="todo-group">
            {state.length === 0 ? (
                <p>Add the things you need to do today...</p>
            ) : (
                state.map((item) => (
                    <TodoItem key={item.id} todo={item} />
                ))
            )}
            <AddTodoForm />
        </div>
    );
}