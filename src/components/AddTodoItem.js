import { useState, useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export function AddTodoForm() {
    const { dispatch } = useContext(TodoContext);
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            dispatch({
                type: "ADD_TODO",
                payload: { text: inputValue.trim() }
            });
            setInputValue(""); // 清空输入框
        }
    };

    return (
        <div className="add-todo-form">
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="todo-input"
                />
            </form>
            <button type="submit" className="add-button">添加</button>
        </div>
    );
}