import {useContext} from "react";

import {TodoContext} from "../contexts/TodoContext";
import {useTodoService} from "../useTodoService";

export function TodoItem(props) {
    const {updateTodo,deleteTodoItem} = useTodoService()
    const {dispatch} = useContext(TodoContext)
    const todo = props.todo
    function makeAsDone() {
        updateTodo(todo)
            .then(todo => {
                dispatch({
                    type: "UPDATE_TODO",
                    payload: todo
                });
            })
    }

    function deleteTodo() {
        deleteTodoItem(todo)
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