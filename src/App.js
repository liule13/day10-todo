import {useEffect, useReducer} from "react";
import "./App.css";
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {RouterProvider} from "react-router";
import {router} from "./routers/Router";
import {api} from "./mockApi";

function loadTodos() {
    return api.get("/todos")
        .then(response => response.data);
}

function App() {
    const [state, dispatch] = useReducer(todoReducer, []);
    useEffect(() => {
        loadTodos().then(todos => {
                dispatch({
                    type: "LOAD_TODOS",
                    payload: todos
                });
            }
        )
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