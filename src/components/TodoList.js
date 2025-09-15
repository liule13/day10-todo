import {TodoGenerator} from "./TodoGenerator";
import {TodoGroup} from "./TodoGroup";

export default function TodoList() {
    return (
        <div className="todo-list">
            <h2>Todo List</h2>
            <TodoGroup />
            <TodoGenerator />
        </div>
    );
}