import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <nav className="sidebar">
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
  );
}
export default Sidebar;

// import React, { useState } from 'react';

// function Sidebar() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const w3_open = () => {
//     setIsSidebarOpen(true);
//   };

//   const w3_close = () => {
//     setIsSidebarOpen(false);
//   };

//   return (
//     <div>
//       <button onClick={w3_open}>Open Sidebar</button>
//       <div id="mySidebar" style={{ display: isSidebarOpen ? 'block' : 'none' }}>
//         <button onClick={w3_close}>Close Sidebar</button>
//         <p>Sidebar content goes here</p>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;

//  .sidebar {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 200px;
//   height: 100vh;
//   background-color: #f1f1f1;
//   z-index: 1;
// }

// .content {
//   margin-left: 200px;
//   padding: 20px;
// }
