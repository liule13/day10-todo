import {useReducer} from "react";
import "./App.css";
import {todoReducer} from "./reducers/TodoReducer";
import {initState, TodoContext} from "./contexts/TodoContext";
import {createBrowserRouter, NavLink, Outlet, RouterProvider} from "react-router";
import {ErrorPage} from "./pages/ErrorPage";
import {HomePage} from "./pages/HomePage";
import {TodoDetailPage} from "./pages/TodoDetailPage";


function DefaultLayout() {
    return (
        <div className="app-container">
            <header>
                <nav>
                    <ul>
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/todos/1"}>TodoDetails</NavLink></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/todos/:id",
                element: <TodoDetailPage/>
            }
        ]
    }
])

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