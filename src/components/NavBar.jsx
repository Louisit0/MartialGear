import { Link } from "react-router-dom";
import icon from "../assets/images/compuicon.png";

const NavBar = () => {
  return (
    <nav className="flex flex-row fixed top-0 bg-white z-50 justify-between w-full py-5 right-0 px-4 md:px-0">
      <div className="flex flex-row w-[72rem] mx-auto justify-between">
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
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <span className="hidden md:block">Carrito</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
