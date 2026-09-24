import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";

const linkClass = ({ isActive }) =>
  `relative text-white py-2 px-4 after:content-[''] after:block after:w-full after:h-[2px]
   after:bg-orange-600 after:origin-left after:transition-transform after:duration-300
   after:ease-in-out hover:after:scale-x-100 hover:text-orange-400
   ${isActive ? "text-orange-500 after:scale-x-100" : "after:scale-x-0"}`;

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-black px-6 py-2 flex items-center justify-between">
      {/* Logo only visible on medium+ screens */}
      <Link to="/" className="hidden md:block">
        <img
          src={logo}
          alt="NexwellSafety"
          className="w-full max-w-sm h-auto object-contain"
        />
      </Link>

      {/* Hamburger button (mobile only) */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-7 h-7 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            // X icon
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            // Hamburger icon
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Links with slide-down animation */}
      <div
        className={`absolute top-full left-0 w-full bg-black md:static md:flex md:flex-row md:ml-auto
          flex-col gap-4 text-lg font-semibold text-center md:text-left
          transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:opacity-100 md:max-h-none"}`}
      >
        <NavLink to="/" end className={linkClass} onClick={() => setIsOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={linkClass} onClick={() => setIsOpen(false)}>
          Catalog
        </NavLink>
        <NavLink to="/contactUs" className={linkClass} onClick={() => setIsOpen(false)}>
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
