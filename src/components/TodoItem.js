import {useContext} from "react";

import {TodoContext} from "../contexts/TodoContext";
import {api} from "../mockApi";

function updateTodo(props) {
    return api.put("/todos/" + props.todo.id, {
        ...props.todo,
        done: !props.todo.done
    })
        .then(res => res.data);
}

function deleteTodoItem(props) {
    return api.delete("/todos/" + props.todo.id)
        .then(res => res.data);
}

export function TodoItem(props) {
    const {dispatch} = useContext(TodoContext)

    function makeAsDone() {
        updateTodo(props)
            .then(todo => {
                dispatch({
                    type: "UPDATE_TODO",
                    payload: todo
                });
            })
    }

    function deleteTodo() {
        deleteTodoItem(props)
            .then((todo => {
                    dispatch({
                        type: "DELETE_TODO",
                        payload: todo
                    });
                }
            ))
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