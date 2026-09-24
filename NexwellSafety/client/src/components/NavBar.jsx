import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";

const linkClass = ({ isActive }) =>
  `relative text-white py-2 px-4
   after:content-[''] after:block after:w-full after:h-[2px]
   after:bg-orange-600 after:origin-left
   after:transition-transform after:duration-300
   after:ease-in-out
   hover:after:scale-x-100
   hover:text-orange-400
   ${
     isActive
       ? "text-orange-500 after:scale-x-100"
       : "after:scale-x-0"
   }`;

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="relative bg-black px-4 md:px-6 h-14 md:h-auto py-0 md:py-2 flex items-center justify-between z-50">

      {/* Logo - now visible on all screens, smaller on mobile */}
      <Link to="/" className="block" onClick={closeMenu}>
        <img
          src={logo}
          alt="Nexwell Safety"
          className="h-10 md:h-auto w-auto md:w-full max-w-[180px] md:max-w-sm object-contain"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex md:flex-row md:ml-auto gap-2 text-lg font-semibold">
        <NavLink to="/" end className={linkClass}>Home</NavLink>
        <NavLink to="/catalog" className={linkClass}>Catalog</NavLink>
        <NavLink to="/contactUs" className={linkClass}>Contact Us</NavLink>
      </div>

      {/* Mobile Hamburger */}
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden ml-auto text-white focus:outline-none"
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Navigation */}
      <div
        className={`
          absolute top-full left-0 w-full bg-black md:hidden
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none invisible"}
        `}
      >
        <div className="flex flex-col items-center gap-2 py-4 text-lg font-semibold">
          <NavLink to="/" end className={linkClass} onClick={closeMenu}>Home</NavLink>
          <NavLink to="/catalog" className={linkClass} onClick={closeMenu}>Catalog</NavLink>
          <NavLink to="/contactUs" className={linkClass} onClick={closeMenu}>Contact Us</NavLink>
        </div>
      </div>

    </nav>
  );
}

export default NavBar;