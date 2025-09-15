import {useState, useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {api} from "../mockApi";

export function AddTodoForm() {
    const {dispatch} = useContext(TodoContext);
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            api.post("/todos", {text: inputValue.trim(), done: false})
                .then(response => response.data)
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