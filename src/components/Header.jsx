import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/everestphysiologo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close mobile menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <nav className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" onClick={closeMenu}>
              <img className="h-16" src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center justify-end space-x-10 font-futurapt">
              <Link
                to="/about"
                className="text-gray-700 hover:text-gray-900 font-bold"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-gray-900 font-bold"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <Link
                to="/pricing"
                className="text-gray-700 hover:text-gray-900 font-bold"
                onClick={closeMenu}
              >
                Pricing
              </Link>
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2_lncfjV2lDh7zH-1wOV3q2aG41YSm7gXDdxJ4mEizZN0q0_g1C0ed3wBGKEtPd-Gx5HWSlaEA"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 font-bold"
                onClick={closeMenu}
              >
                Book an Appointment
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="font-futurapt px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/about"
            className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link
            to="/pricing"
            className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            onClick={closeMenu}
          >
            Pricing
          </Link>
          <Link
            to="/booking"
            className="bg-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700"
            onClick={closeMenu}
          >
            Book an Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}
