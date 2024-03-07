import { NavLink, Routes, Route } from "react-router-dom";
import Max from "./team/Max";
import Sara from "./team/Sara";
import Zain from "./team/Zain";

const Teams = () => {
  return (
    <div>
      <nav>
        <ul className="parent-nav">
          <li>
            <NavLink
              className="team-link "
              to="max"
              style={({ isActive }) =>
                isActive ? { color: "orange" } : undefined
              }
            >
              Max
            </NavLink>
          </li>
          <li>
            <NavLink
              className="team-link "
              to="zain"
              style={({ isActive }) =>
                isActive ? { color: "orange" } : undefined
              }
            >
              Zain
            </NavLink>
          </li>
          <li>
            <NavLink
              className="team-link "
              to="sara"
              style={({ isActive }) =>
                isActive ? { color: "orange" } : undefined
              }
            >
              Sara
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="max" element={<Max />} />
        <Route path="sara/*" element={<Sara />} />
        <Route path="zain" element={<Zain />} />
      </Routes>
    </div>
  );
};

export default Teams;
