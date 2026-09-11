import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";

const linkClass = ({ isActive }) =>
    `relative text-white p-6 after:content-[''] after:block after:w-full after:h-[2px]
    after:bg-orange-600 after:origin-left after:transition-transform after:duration-300
    after:ease-in-out hover:after:scale-x-100 hover:text-orange-400
    ${isActive ? "text-orange-500 after:scale-x-100" : "after:scale-x-0"}`;

function NavBar(){
    return(
        <nav className="relative bg-black px-12 py-2 flex items-center  ">
            <Link to="/"> <img src={logo} alt="NexwellSafety" className="w-full max-w-sm h-auto object-contain" /></Link>
            <div className="ml-auto flex gap-4 text-lg font-semibold">
             <NavLink to="/" end className={linkClass}>Home</NavLink>
             <NavLink to="/catalog" className={linkClass}>Catalog</NavLink>
             <NavLink to="/contactUs" className={linkClass}>Contact Us</NavLink>

            </div>
           
        </nav>
        
    );

};

export default NavBar;