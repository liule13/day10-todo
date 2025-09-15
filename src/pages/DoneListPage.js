import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {TodoItem} from "../components/TodoItem";

export function DoneListPage() {
    const { state } = useContext(TodoContext)
    return (
        <div className="todo-group">
            {state.length === 0 ? (
                <p>Add the things you need to do today...</p>
            ) : (
                state.filter(
                    (item) => item.done === true
                ).map((item) => (
                    <TodoItem key={item.id} todo={item} />
                )))}
        </div>
    );
}