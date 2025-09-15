import { useParams } from "react-router";
import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { Card, Typography, Space, Button } from "antd";
import {ArrowLeftOutlined} from "@ant-design/icons";
import { useNavigate } from "react-router";

const { Title, Text } = Typography;

export function TodoDetailPage() {
    const {id} = useParams();
    const {state} = useContext(TodoContext);
    const todo = state.find(t => String(t.id) === String(id));

    const navigate = useNavigate();
    if (!todo) {
        return (
            <div style={{ textAlign: "center", padding: "50px", fontFamily: "Arial" }}>
                <Title level={2}>📭 待办事项未找到</Title>
                <Text>抱歉，您查找的待办事项（ID: {id}）不存在。</Text>
                <Button
                    type="primary"
                    style={{ marginTop: "16px" }}
                    onClick={() => navigate("/")}
                >
                    🏠 返回首页
                </Button>
            </div>
        );
    }

    return (
        <div style={{
            padding: "40px 20px",
            minHeight: "100vh",
            background: "#f9f9f9",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <Card
                style={{
                    width: "100%",
                    maxWidth: "600px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    borderRadius: "12px"
                }}
            >
                <Space direction="vertical" size="large" style={{ width: "100%" }}>
                    <div>
                        <Text strong style={{ fontSize: "18px", display: "block", marginBottom: "8px" }}>
                             Todo Detail
                        </Text>
                        <Text style={{ fontSize: "16px", color: "#333" }}>{todo.text}</Text>
                    </div>
                </Space>
            </Card>

            <div style={{ marginTop: "24px" }}>
                <Button
                    icon={<ArrowLeftOutlined />}
                    onClick={() => navigate(-1)}
                    style={{ marginRight: "12px" }}
                >return</Button>
            </div>
        </div>
    );
}