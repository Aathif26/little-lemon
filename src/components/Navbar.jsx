import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const NavItems = [
  {
    PageLabel: "Home",
    PagePath: "/",
  },
  {
    PageLabel: "About",
    PagePath: "/about",
  },
  {
    PageLabel: "Services",
    PagePath: "/services",
  },
  {
    PageLabel: "Menu",
    PagePath: "/menu",
  },
  {
    PageLabel: "Reservations",
    PagePath: "/booking",
  },
  {
    PageLabel: "Order Online",
    PagePath: "/order-online",
  },
  {
    PageLabel: "Login",
    PagePath: "/login",
  },
];
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="px-4 py-3 md:px-10 h-20">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img src="/assets/Logo.svg" alt="Logo" className="w-32" />
        </Link>
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-black text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <ul className="hidden sm:flex gap-4 items-center">
          {NavItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.PagePath}
                className="text-black hover:text-[#F4CE14] font-medium text-md hover:underline cursor-pointer"
              >
                {item.PageLabel}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 sm:hidden z-50 absolute top-10 left-0 w-full bg-white shadow-lg p-4">
          {NavItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.PagePath}
                className="block text-black hover:text-[#F4CE14] font-medium text-lg"
                onClick={() => setMenuOpen(false)}
              >
                {item.PageLabel}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
