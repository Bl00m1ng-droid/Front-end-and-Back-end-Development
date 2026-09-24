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

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="relative bg-black px-4 sm:px-6 py-2 z-50">

      {/* =========================
          MAIN NAVBAR
      ========================== */}
      <div className="flex items-center justify-between">

        {/* Logo - Desktop only */}
        <Link
          to="/"
          className="hidden md:block"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Nexwell Safety"
            className="w-52 h-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 text-lg font-semibold ml-auto">
          <NavLink
            to="/"
            end
            className={linkClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/catalog"
            className={linkClass}
          >
            Catalog
          </NavLink>

          <NavLink
            to="/contactUs"
            className={linkClass}
          >
            Contact Us
          </NavLink>
        </div>

        {/* =========================
            MOBILE HAMBURGER
        ========================== */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="
            md:hidden
            ml-auto
            p-2
            text-white
            rounded-md
            hover:text-orange-400
            focus:outline-none
            focus:ring-2
            focus:ring-orange-500
            transition-colors
            duration-200
          "
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              /* X icon */
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              /* Hamburger icon */
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* =========================
          MOBILE NAVIGATION
      ========================== */}
      <div
        className={`
          md:hidden
          absolute
          left-0
          top-full
          w-full
          bg-black
          border-t
          border-gray-800
          shadow-lg
          overflow-hidden
          transition-all
          duration-300
          ease-in-out
          ${
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="flex flex-col items-center py-4 gap-2 text-lg font-semibold">

          <NavLink
            to="/"
            end
            className={linkClass}
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/catalog"
            className={linkClass}
            onClick={closeMenu}
          >
            Catalog
          </NavLink>

          <NavLink
            to="/contactUs"
            className={linkClass}
            onClick={closeMenu}
          >
            Contact Us
          </NavLink>

        </div>
      </div>
    </nav>
  );
}

export default NavBar;
