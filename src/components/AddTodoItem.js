import {useState, useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {useTodoService} from "../useTodoService";
import {Button, Input} from "antd";
import {PlusOutlined} from "@ant-design/icons";

export function AddTodoForm() {
    const {createTodo} = useTodoService();
    const {dispatch} = useContext(TodoContext);
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            createTodo(inputValue)
                .then(todo => {
                    dispatch({
                        type: "ADD_TODO",
                        payload: todo
                    });
                });
            setInputValue("");
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <Input
                placeholder="请输入待办事项..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                size="middle"
            />
            <Button
                htmlType="submit"
                type="primary"
                icon={<PlusOutlined />}
                size="middle"
            >
                Add
            </Button>
        </form>
    );
}