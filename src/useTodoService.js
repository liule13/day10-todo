import { api } from "./mockApi";

export function useTodoService() {

    function createTodo(inputValue) {
        return api.post("/todos", { text: inputValue.trim(), done: false })
            .then(response => response.data);
    }
    function updateTodo(todo) {
        return api.put("/todos/" + todo.id, {
            ...todo,
            done: !todo.done
        }).then(res => res.data);
    }

    function deleteTodoItem(todo) {
        return api.delete("/todos/" + todo.id)
            .then(res => res.data);
    }
    function loadTodos() {
        return api.get("/todos")
            .then(response => response.data);
    }
    return { createTodo, updateTodo, deleteTodoItem, loadTodos }
}