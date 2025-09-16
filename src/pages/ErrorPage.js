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
                    <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                        Page Not Found
                    </h2>
                    <p style={{ fontSize: "1.2rem", marginBottom: "2rem", color: "#666" }}>
                        Sorry, the page you are looking for does not exist.
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
                        return Home
                    </a>
                </>
            ) : (
                <>
                    <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#d32f2f" }}>
                        Error occurred
                    </h1>
                    <p style={{ fontSize: "1.1rem", marginBottom: "2rem", color: "#555" }}>
                        Sorry, an unexpected error has occurred.
                    </p>
                    <details style={{ textAlign: "left", maxWidth: "600px", fontSize: "0.9rem" }}>
                        <summary style={{ cursor: "pointer", color: "#007bff" }}>
                            Click to see error details
                        </summary>
                        <pre style={{ background: "#f1f1f1", padding: "1rem", borderRadius: "5px", overflow: "auto" }}>
                            {JSON.stringify(error, null, 2)}
                        </pre>
                    </details>
                </>
            )}
        </div>
    );
}