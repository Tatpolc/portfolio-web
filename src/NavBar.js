import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
            <nav className="p-3 flex items-center my-0 mx-auto border-b border-solid border-[#d5d5d5] w-11/12">
                <h1 className="text-[#1877f2]">Tatpol Chutipat</h1>
                <div className="ml-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/skills">Skills</Link>
                    <Link className="nav-link" to="/projects">Projects</Link>
                    <Link className="nav-link" to="/about">About Me</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>
                </div>
            </nav>
     );
}
 
export default Navbar;