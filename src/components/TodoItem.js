import { useContext } from "react";

import { TodoContext } from "../contexts/TodoContext";
import {api} from "../mockApi";

export function TodoItem(props) {
    const { dispatch } = useContext(TodoContext)

    function makeAsDone() {
        api.put("/todos/" + props.todo.id, {
            ...props.todo,
            done: !props.todo.done
        }).then(() => {
            console.log("Toggled todo with id:", props.todo.id);
        }).catch((error) => {
            console.error("Error toggling todo:", error);
        })
        dispatch({
            type: "TOGGLE_TODO",
            payload: { id: props.todo.id }
        })
    }

    function deleteTodo() {
        api.delete("/todos/" + props.todo.id)
            .then(() => {
                console.log("Deleted todo with id:", props.todo.id);
            })
            .catch((error) => {
                console.error("Error deleting todo:", error);
            });
        dispatch({
            type: "DELETE_TODO",
            payload: { id: props.todo.id }
        });
    }

    function toDetail() {
        window.location.href = `/todos/${props.todo.id}`
    }

    return (
        <div className="todo-item-container">
            <div className={"todo-item"} onClick={makeAsDone}>
                <span className={props.todo.done ? "todo-done" : ""}>
                    {props.todo.text}
                </span>
            </div>
            <button className="delete-button" onClick={deleteTodo}>X</button>
            <button className={"detail-button"} onClick={toDetail}>details</button>
        </div>


    );
}