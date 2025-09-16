import { createBrowserRouter } from "react-router";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { ErrorPage } from "../pages/ErrorPage";
import { HomePage } from "../pages/HomePage";
import { DoneListPage } from "../pages/DoneListPage";
import { AboutUsPage } from "../pages/AboutUsPage";
import { TodoDetailPage } from "../pages/TodoDetailPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/todos/:id",
                element: <TodoDetailPage />
            },
            {
                path: "/done",
                element: <DoneListPage />
            },
            {
                path: "/about",
                element: <AboutUsPage />
            }
        ]
    }
])