import "./App.css";
import NavBar from "./components/NavBar";
import Boxeo from "./pages/Categorias/Boxeo";
import Kickboxing from "./pages/Categorias/Kickboxing";
import Taekwondo from "./pages/Categorias/Taekwondo";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import SobreNosotros from "./pages/SobreNosotros";
import "animate.css";
import { Route, Switch } from "wouter";

function App() {
  return (
    <div className="bg-slate-50 h-screen w-4/5 mx-auto">
      <header>
        <NavBar />
      </header>
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/productos" component={Productos} />
          <Route path="/boxeo" component={Boxeo} />
          <Route path="/kickboxing" component={Kickboxing} />
          <Route path="/taekwondo" component={Taekwondo} />
          <Route path="/sobreNosotros" component={SobreNosotros} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
