import {useReducer} from "react";
import "./App.css";
import {TodoGroup} from "./components/TodoGroup";
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";

export const initState = [
    // {id: 1, text: "the first todo", done: false},
    // {id: 2, text: "the second todo", done: true},
];

function App() {
    const [state, dispatch] = useReducer(todoReducer, initState);
    return (
        <div>
            <TodoContext value={{state, dispatch}}>
                <TodoGroup/>
            </TodoContext>
        </div>
    );
}

export default App;