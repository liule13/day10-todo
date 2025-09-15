import {NavLink, Outlet} from "react-router";

export function DefaultLayout() {
    return (
        <div className="app-container">
            <header>
                <nav>
                    <ul>
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/done/"}>Done List</NavLink></li>
                        <li><NavLink to={"/about"}>AboutUs</NavLink></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
}