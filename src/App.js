import {useReducer} from "react";
import "./App.css";
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {createBrowserRouter, NavLink, Outlet, RouterProvider} from "react-router";
import {ErrorPage} from "./pages/ErrorPage";
import {HomePage} from "./pages/HomePage";


function DefaultLayout() {
    return (
        <div className="app-container">
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
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
            }
        ]
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
            <TodoContext value={{state, dispatch}}>
                <RouterProvider router={router}/>
            </TodoContext>
        </div>
    );
}

export default App;