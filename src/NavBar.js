import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
            <nav className="navbar">
                <h1>Tatpol Chutipat</h1>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/skill">Skills</Link>
                    <Link to="/project">Projects</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </nav>
     );
}
 
export default Navbar;