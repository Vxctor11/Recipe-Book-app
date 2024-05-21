import logo from "../assets/image/book-recipe-logo.png"
function Navbar(){
    return(
       <nav className = "navbar">

        <div className="navbar-left">
           <img src={logo} alt="logo"/> Recipe Book App
        </div>

        <div className="navbar-center">
            <ul className="nav-links">
                <li>
                    <a href="#">Recipes</a>
                </li>
                <li>
                    <a href="#">About Us</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
       </nav>
    )
}
export default Navbar;