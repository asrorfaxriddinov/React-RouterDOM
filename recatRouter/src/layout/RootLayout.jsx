import { NavLink, Outlet } from "react-router-dom"
import BreadCraumps from "../components/BreadCraumps";

function RootLayout() {
    return (
        <div>
            <header>
                <nav>
                    <h1>My Articles</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/articls">Articles</NavLink>
                    <NavLink to="/about">About</NavLink>
                </nav>
                <BreadCraumps/>
            </header>
            <main><Outlet /></main>
            <footer></footer>
        </div>
    )
}

export default RootLayout;