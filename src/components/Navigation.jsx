import { NavLink, Outlet } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <nav>
        <ul className="parent-nav">
          <li>
            <NavLink
              className="parent-link"
              style={({ isActive }) =>
                isActive ? { color: "red" } : undefined
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="parent-link"
              to="/team"
              style={({ isActive }) =>
                isActive ? { color: "red" } : undefined
              }
            >
              Our team
            </NavLink>
          </li>
          <li>
            <NavLink
              className="parent-link"
              to="/contact"
              style={({ isActive }) =>
                isActive ? { color: "red" } : undefined
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
export default Navigation;
