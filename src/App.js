import { useReducer } from "react";
import "./App.css";
import { todoReducer } from "./reducers/TodoReducer";
import { TodoContext } from "./contexts/TodoContext";
import TodoList from "./components/TodoList";
import { createBrowserRouter, Route, RouterProvider } from "react-router";

const router = createBrowserRouter([
    {
        path: "/todos",
        element: <TodoList />
    }
])

export const initState = [
    {id: 1, text: "This is the first todo I need to do", done: false},
    {id: 2, text: "This is the second todo I need to do", done: false},
    {id: 3, text: "I already done this item", done: true}];

function App() {
    const [state, dispatch] = useReducer(todoReducer, initState);
    return (
        <div className="App">
            <h2>Todo List</h2>
            <TodoContext value={{ state, dispatch }}>
                <RouterProvider router={router} />
            </TodoContext>
        </div>
    );
}

export default App;