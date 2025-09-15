import {TodoGroup} from "../components/TodoGroup";
import {initState} from "../contexts/TodoContext";

export function DoneListPage() {
    const doneTodos = initState.filter(done => done.done === true);
    return (
        <div className="todo-list">
            <h2>Todo List</h2>
            <TodoGroup todos = {doneTodos}></TodoGroup>
        </div>
    );
}