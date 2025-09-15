import {AddTodoForm} from "./AddTodoItem";
import {TodoGroup} from "./TodoGroup";
import {initState} from "../contexts/TodoContext";

export default function TodoList() {
    return (
        <div className="todo-list">
            <h2>Todo List</h2>
            <TodoGroup todos = {initState}/>
            <AddTodoForm />
        </div>
    );
}