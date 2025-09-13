import {useContext} from "react";
import {TodoItem} from "./TodoItem";

import {TodoContext} from "../contexts/TodoContext";
import {AddTodoForm} from "./AddTodoItem";

export function TodoGroup() {
    const {state, dispatch} = useContext(TodoContext)
    return <div>
        <h1>Todo List</h1>

        {
            state.map((item, index) => {
                return <TodoItem todo={item} key={index} index={index}></TodoItem>
            })
        }
        <AddTodoForm />

    </div>;
}