import {useReducer} from "react";
import "./App.css";
import {todoReducer} from "./reducers/TodoReducer";
import {initState, TodoContext} from "./contexts/TodoContext";
import {RouterProvider} from "react-router";
import {router} from "./routers/Router";


function App() {
    const [state, dispatch] = useReducer(todoReducer, initState);
    return (
        <div className="App">
            <TodoContext value={{state, dispatch}}>
                <RouterProvider router={router}/>
            </TodoContext>
        </div>
    );
}

export default App;