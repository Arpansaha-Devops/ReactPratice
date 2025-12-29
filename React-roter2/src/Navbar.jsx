import { NavLink } from "react-router-dom";
import "./App.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">MyApp</h2>

      <ul className="nav-links">
        <li>
          <NavLink to="/" className="nav-item">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-item">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-item">
            Contact
          </NavLink>
        </li>
       
      </ul>
    </nav>
  );
}
