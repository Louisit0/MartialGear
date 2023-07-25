import "./App.css";
import NavBar from "./components/NavBar";
import Boxeo from "./pages/Categorias/Boxeo";
import Kickboxing from "./pages/Categorias/Kickboxing";
import Taekwondo from "./pages/Categorias/Taekwondo";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import SobreNosotros from "./pages/SobreNosotros";
import "animate.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-slate-50 h-screen w-4/5 mx-auto">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/productos" element={<Productos />}></Route>
          <Route path="/sobreNosotros" element={<SobreNosotros />}></Route>
          <Route path="/boxeo" element={<Boxeo />}></Route>
          <Route path="/kickboxing" element={<Kickboxing />}></Route>
          <Route path="/taekwondo" element={<Taekwondo />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
