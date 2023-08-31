import { Link } from "react-router-dom";
import Indicador from "./Indicador";

const NavBar = ({ notificationCount }) => {
  return (
    <div>
      <nav className="flex flex-row fixed top-0 bg-white z-50 w-full justify-around py-10">
        <Link to="/" className="text-3xl font-semibold">
          PCGear
        </Link>
        <div className="flex gap-4 text-sm md:gap-8 md:text-base items-center">
          <Link to="/productos">Productos</Link>
          <Indicador notificationCount={notificationCount} />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
