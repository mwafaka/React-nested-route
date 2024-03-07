import { NavLink, Routes, Route } from "react-router-dom";
import MyProjects from "../sara/MyProjects";
import MyClients from "../sara/Myclients";
import AboutMe from "../sara/AboutMe";
// import MyClients from '../sara/Myclients';

const Sara = () => {
  return (
    <div>
      <nav>
        <ul className="parent-nav">
          <li>
            <NavLink
              className="sara-link "
              to="myproject"
              style={({ isActive }) =>
                isActive ? { color: "violet" } : undefined
              }
            >
              MyProjects
            </NavLink>
          </li>
          <li>
            <NavLink
              className="sara-link "
              to="myclient"
              style={({ isActive }) =>
                isActive ? { color: "violet" } : undefined
              }
            >
              MyClients
            </NavLink>
          </li>
          <li>
            <NavLink
              className="sara-link "
              to="aboutme"
              style={({ isActive }) =>
                isActive ? { color: "violet" } : undefined
              }
            >
              About me
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="myproject"
          element={<MyProjects isAuthenticated={false} />}
        />
        <Route path="myclient" element={<MyClients />} />
        <Route path="aboutme" element={<AboutMe />} />
      </Routes>
    </div>
  );
};

export default Sara;
