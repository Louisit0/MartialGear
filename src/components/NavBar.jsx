import { Link } from "react-router-dom";
import icon from "../assets/images/compuicon.png";

const NavBar = () => {
  return (
    <nav className="flex flex-row fixed top-0 bg-white z-50 w-full justify-between py-5 px-4 md:px-40">
      <Link
        to="/"
        className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent tracking-wide"
      >
        <img src={icon} alt="icon" className="w-10 h-10" />
      </Link>
      <div className="flex gap-8 text-sm items-center">
        <Link to="/productos" className="flex flex-row gap-3 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6h.008v.008H6V6z"
            />
          </svg>
          <span className="hidden md:block">Productos</span>
        </Link>
        {/* Animar cuando el carrito sea mayor a 0 */}
        <Link
          to="/Carrito"
          className={`flex flex-row gap-3 items-center
            `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          <span className="hidden md:block">Carrito</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
