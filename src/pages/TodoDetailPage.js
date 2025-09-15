import {useParams} from "react-router";
import {useContext} from "react";
import {TodoItem} from "../components/TodoItem";
import {TodoContext} from "../contexts/TodoContext";

export function TodoDetailPage() {
    const {id} = useParams();
    const {state} = useContext(TodoContext);
    const todo = state.find(t => String(t.id) === String(id));
    console.log(todo)
    return (
        <div>
            <TodoItem key={todo.id} todo={todo}/>
        </div>
    );
}