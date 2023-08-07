import { Link } from "react-router-dom";
import Drawer from "./Drawer";

const NavBar = ({ drawerOpen, toggleDrawer }) => {
  return (
    <div>
      <nav className="flex flex-row fixed top-0 bg-white z-50 border-b-2 w-full justify-around py-10">
        <Link to="/" className="text-3xl font-semibold">
          PCGear
        </Link>
        <div className="flex gap-4 text-sm md:gap-8 md:text-base items-center">
          <Link to="/productos">Productos</Link>
          <Link to="/sobreNosotros">Sobre nosotros</Link>
          <Drawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
