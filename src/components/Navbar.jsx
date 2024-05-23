import logo from "../assets/image/book-recipe-logo.png"
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
       <nav className = "navbar">

        <div className="navbar-left">
           <img src={logo} alt="logo"/>
           <a className="logo">Recipe Book App</a>
        </div>

        <div className="navbar-center">
            <ul className="nav-links">
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
export default Navbar;