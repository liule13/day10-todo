import {useRouteError} from "react-router";

export function ErrorPage() {
    const error = useRouteError();
    return (
        <div>
            {error.status === 404
                ? <div><h1>404 Not Found</h1></div>
                : <div>{JSON.stringify(error)}</div>
            }
        </div>
    );
}