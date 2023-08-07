import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ProductoDetalle from "./pages/Categorias/ProductoDetalle";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import SobreNosotros from "./pages/SobreNosotros";
import "animate.css";
import { Routes, Route } from "react-router-dom";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <div className="bg-slate-50">
      <header>
        <NavBar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
      </header>
      <main className="max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route
            path="/productos/:productosId"
            element={<ProductoDetalle toggleDrawer={toggleDrawer} />}
          />
          <Route path="/sobreNosotros" element={<SobreNosotros />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
