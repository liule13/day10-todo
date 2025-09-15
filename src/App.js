import {useEffect, useReducer} from "react";
import "./App.css";
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {RouterProvider} from "react-router";
import {router} from "./routers/Router";
import {useTodoService} from "./useTodoService";

function App() {
    const {loadTodos} = useTodoService();
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