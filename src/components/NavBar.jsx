import { Link } from "wouter";

const NavBar = () => {
  return (
    <div>
      <nav className="flex flex-row items-end gap-10 py-10">
        <Link to="/" className="text-3xl font-semibold">
          MartialGear
        </Link>
        <Link to="/productos">Productos</Link>
        <Link to="/sobreNosotros">Sobre nosotros</Link>
        <Link to="/products">FAQ</Link>
      </nav>
    </div>
  );
};

export default NavBar;
