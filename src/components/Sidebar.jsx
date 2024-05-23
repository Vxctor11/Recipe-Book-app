import { NavLink } from "react-router-dom";

function Sidebar(){
    return(
       <nav className = "sidebar">
        <div className="sidebar-center">
            <ul className="side-links">
            <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "selected" : "")}
            >
                <li>
                    <a>Recipes</a>
                </li>
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "selected" : "")}
                >
                <li>
                    <a>About Us</a>
                </li>
            </NavLink>
            </ul>
        </div>
       </nav>
    )
}
export default Sidebar;