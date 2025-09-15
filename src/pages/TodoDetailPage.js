import {useParams} from "react-router";
import {useContext, useEffect, useState} from "react";
import {TodoItem} from "../components/TodoItem";
import {TodoContext} from "../contexts/TodoContext";

export function TodoDetailPage() {
    const {id} = useParams();
    const {state} = useContext(TodoContext);
    const todo = state.find(t => String(t.id) === String(id));
    console.log(todo)
    if (!todo) {
        return <p>未找到该 Todo</p>;
    }
    return (
        <div>
            <TodoItem key={todo.id} todo={todo}/>
        </div>
    );
}