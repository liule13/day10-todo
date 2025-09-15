import {useEffect, useReducer} from "react";
import "./App.css";
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {RouterProvider} from "react-router";
import {router} from "./routers/Router";
import axios from "axios";

const api = axios.create({
    baseURL: "https://68c7ac9c5d8d9f51473288cc.mockapi.io/",
    headers: {"Content-Type": "application/json"},
    timeout: 10_000,
})

function App() {
    const [state, dispatch] = useReducer(todoReducer, []);
    useEffect(() => {
        api.get("/todos")
            .then(response => response.data)
            .then(todos => dispatch({
                type: "LOAD_TODOS",
                payload: todos
            }))
    }, [dispatch]);
    return (
        <div className="App">
            <TodoContext value={{state, dispatch}}>
                <RouterProvider router={router}/>
            </TodoContext>
        </div>
    );
}

export default App;