function Sidebar(){
    return(
       <nav className = "sidebar">

        <div className="sidebar-left"/>

        <div className="sidebar-center">
            <ul className="side-links">
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
export default Sidebar;