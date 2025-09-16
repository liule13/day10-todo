import { useEffect, useReducer } from "react";
import "./App.css";
import { todoReducer } from "./reducers/TodoReducer";
import { TodoContext } from "./contexts/TodoContext";
import { RouterProvider } from "react-router";
import { router } from "./routers/Router";
import { useTodoService } from "./useTodoService";
import { unstableSetRender } from 'antd';
import { createRoot } from 'react-dom/client';

unstableSetRender((node, container) => {
    container._reactRoot ||= createRoot(container);
    const root = container._reactRoot;
    root.render(node);
    return async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
        root.unmount();
    };
});
function App() {
    const { loadTodos } = useTodoService();
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
            <TodoContext value={{ state, dispatch }}>
                <RouterProvider router={router} />
            </TodoContext>
        </div>
    );
}

export default App;