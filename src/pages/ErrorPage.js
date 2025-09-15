import { useRouteError } from "react-router";

export function ErrorPage() {
    const error = useRouteError();

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                textAlign: "center",
                fontFamily: "Arial, sans-serif",
                backgroundColor: "#f9f9f9",
                color: "#333",
            }}
        >
            {error.status === 404 ? (
                <>
                    <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>404</h1>
                    <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>页面未找到</h2>
                    <p style={{ fontSize: "1.2rem", marginBottom: "2rem", color: "#666" }}>
                        抱歉，您访问的页面不存在。
                    </p>
                    <a
                        href="/"
                        style={{
                            padding: "10px 20px",
                            fontSize: "1rem",
                            textDecoration: "none",
                            background: "#007bff",
                            color: "white",
                            borderRadius: "5px",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                         返回首页
                    </a>
                </>
            ) : (
                <>
                    <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#d32f2f" }}>
                        出现了一个错误
                    </h1>
                    <p style={{ fontSize: "1.1rem", marginBottom: "2rem", color: "#555" }}>
                        抱歉，发生了意外错误，请稍后重试或联系管理员。
                    </p>
                    <details style={{ textAlign: "left", maxWidth: "600px", fontSize: "0.9rem" }}>
                        <summary style={{ cursor: "pointer", color: "#007bff" }}>🔧 查看错误详情（开发调试用）</summary>
                        <pre style={{ background: "#f1f1f1", padding: "1rem", borderRadius: "5px", overflow: "auto" }}>
              {JSON.stringify(error, null, 2)}
            </pre>
                    </details>
                </>
            )}
        </div>
    );
}