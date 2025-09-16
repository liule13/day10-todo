import { TodoGenerator } from "./TodoGenerator";
import { TodoGroup } from "./TodoGroup";

export default function TodoList() {
    return (
        <div className="todo-list">
            <TodoGenerator />
            <TodoGroup />
        </div>
    );
}