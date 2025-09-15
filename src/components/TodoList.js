import { AddTodoForm } from "./AddTodoItem";
import { TodoGroup } from "./TodoGroup";

export default function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
    return (
        <div className="todo-list">
            <h2>Todo List</h2>
            <TodoGroup />
            <AddTodoForm />
        </div>
    );
}