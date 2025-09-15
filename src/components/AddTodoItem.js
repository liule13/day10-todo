import {useState, useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {useTodoService} from "../useTodoService";

export function AddTodoForm() {
    const {createTodo} = useTodoService();
    const {dispatch} = useContext(TodoContext);
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            createTodo(inputValue)
                .then(todo => {
                    dispatch({
                        type: "ADD_TODO",
                        payload: todo
                    });
                });
            setInputValue("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-todo-form">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="todo-input"
            />
            <button type="submit" className="add-button">add</button>
        </form>
    );
}