import {createBrowserRouter} from "react-router";
import {DefaultLayout} from "../layouts/DefaultLayout";
import {ErrorPage} from "../pages/ErrorPage";
import {HomePage} from "../pages/HomePage";
import {DoneListPage} from "../pages/DoneListPage";
import {AboutUsPage} from "../pages/AboutUsPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/done",
                element: <DoneListPage/>
            },
            {
                path: "/about",
                element: <AboutUsPage/>
            }
        ]
    }
])