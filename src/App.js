import {useReducer} from "react";
import "./App.css";
import {TodoGroup} from "./component/TodoGroup";
import {todoReducer} from "./reducer/TodoReducer";
import {TodoContext as TodoContext1} from "./contexts/TodoContext";

export const initState = [
    {id: 1, text: "the first todo", done: false},
    {id: 2, text: "the second todo", done: true},
];

function App() {
    const [state, dispatch] = useReducer(todoReducer, initState);
    return (
        <div>
            <TodoContext1 value={{state, dispatch}}>
                <TodoGroup/>
            </TodoContext1>
        </div>
    );
}

export default App;