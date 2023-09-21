import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ProductoDetalle from "./pages/Categorias/ProductoDetalle";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Carrito from "./pages/Carrito";
import "animate.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [carritoItems, setCarritoItems] = useState([]);
  const [tabState, setTabState] = useState("");

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <header>
        <NavBar
          drawerOpen={drawerOpen}
          toggleDrawer={toggleDrawer}
          carritoItems={carritoItems}
        />
      </header>
      <main className="max-w-6xl mx-auto">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/productos"
            element={
              <Productos tabState={tabState} setTabState={setTabState} />
            }
          />
          <Route
            path="/productos/:productosId"
            element={
              <ProductoDetalle
                toggleDrawer={toggleDrawer}
                carritoItems={carritoItems}
                setCarritoItems={setCarritoItems}
              />
            }
          />
          <Route
            path="/carrito"
            element={
              <Carrito
                carritoItems={carritoItems}
                setCarritoItems={setCarritoItems}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
