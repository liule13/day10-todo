import {useContext, useState} from "react";

import {TodoContext} from "../contexts/TodoContext";
import {useTodoService} from "../useTodoService";
import {Button, Input, Modal} from "antd";
import {api} from "../mockApi";
import {useNavigate} from "react-router";

export function TodoItem(props) {
    const {updateTodo, deleteTodoItem} = useTodoService()
    const {dispatch} = useContext(TodoContext)
    const todo = props.todo
    const [editText, setEditText] = useState(todo.text);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        api.put("/todos/" + todo.id, {
            ...todo,
            text: editText
        }).then(res => res.data)
            .then(data => {
                dispatch({
                    type: "UPDATE_TODO",
                    payload: data
                });
            })
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    function makeAsDone() {
        updateTodo(todo)
            .then(todo => {
                dispatch({
                    type: "UPDATE_TODO",
                    payload: todo
                });
            })
    }

    function deleteTodo() {
        deleteTodoItem(todo)
            .then((todo => {
                    dispatch({
                        type: "DELETE_TODO",
                        payload: todo
                    });
                }
            ))
    }

    function toDetail() {
        navigate(`/todos/${todo.id}`);
    }

    return (
        <div className="todo-item-container">
            <div className={"todo-item"} onClick={makeAsDone}>
                <span className={todo.done ? "todo-done" : ""}>
                    {todo.text}
                </span>
            </div>
            <Button type="primary" onClick={showModal}>
                edit
            </Button>
            <Modal
                title="Todo"
                closable={{'aria-label': 'Custom Close Button'}}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}/>
            </Modal>
            <Button type="primary" onClick={toDetail}>
                details
            </Button>
            <Button color="danger" onClick={deleteTodo}>
                X
            </Button>
        </div>
    );
}