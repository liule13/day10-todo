import { useContext } from "react";

import { TodoContext } from "../contexts/TodoContext";

export function TodoItem(props) {
    const { dispatch } = useContext(TodoContext)

    function makeAsDone() {
        dispatch({
            type: "TOGGLE_TODO",
            payload: { id: props.todo.id }
        })
    }

    function deleteTodo() {
        dispatch({
            type: "DELETE_TODO",
            payload: { id: props.todo.id }
        });
    }

    return (
        <div className="todo-item-container">
            <div className={"todo-item"} onClick={makeAsDone}>
                <span className={props.todo.done ? "todo-done" : ""}>
                    {props.todo.text}
                </span>
            </div>
            <button className="delete-button" onClick={deleteTodo}>X</button>
        </div>


    );
}