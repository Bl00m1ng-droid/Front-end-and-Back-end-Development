import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const linkClass = "relative text-white p-6  after:content-[''] after:block after:w-full after:h-[2px] after:bg-orange-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100 hover:text-orange-400";
function NavBar(){
    return(
        <nav className="relative bg-black px-16 py-2 flex items-center  ">
            <Link to="/"> <img src={logo} alt="NexwellSafety" className="w-full max-w-sm h-auto object-contain" /></Link>
           
            <Link to="/" className={linkClass}>Home</Link>
            <Link to="/catalog"  className={linkClass}>Catalog</Link>
            <Link to="/contactUs"  className={linkClass}>Contact Us</Link>

        </nav>
        
    );

};

export default NavBar;