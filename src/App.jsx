import "./App.css";
import NavBar from "./components/NavBar";
import Boxeo from "./pages/Categorias/Boxeo";
import Kickboxing from "./pages/Categorias/Kickboxing";
import ProductoDetalle from "./pages/Categorias/ProductoDetalle";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import SobreNosotros from "./pages/SobreNosotros";
import "animate.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-slate-50 h-screen w-4/5 mx-auto">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:productosId" element={<ProductoDetalle />} />
          <Route path="/sobreNosotros" element={<SobreNosotros />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
