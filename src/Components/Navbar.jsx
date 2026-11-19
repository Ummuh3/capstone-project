import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header className="navbar-header">
      <h1>Tech <span>4</span> youth</h1>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/Courses">Courses</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Register">Register</Link>
      </nav>
    </header>
  );
}
export default Navbar;