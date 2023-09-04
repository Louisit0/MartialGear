import { Link } from "react-router-dom";
import { dataProductos } from "../data/allData";
import Tabs from "../components/Tabs";

const Productos = ({ tabState, setTabState }) => {
  const productosFiltrados = dataProductos.filter(
    (producto) => producto.categoria === tabState
  );

  const productosAVisualizar =
    tabState === "" ? dataProductos : productosFiltrados;

  return (
    <div className="flex flex-col mt-36 mb-8">
      <Tabs tabState={tabState} setTabState={setTabState} />
      <div className="grid md:grid-cols-3 gap-4 mx-4 md:mx-0">
        {productosAVisualizar.map((producto) => (
          <Link
            key={producto.id}
            to={`/productos/${producto.id}`}
            className="cursor-pointer bg-white border border-gray-200 shadow-sm rounded-lg"
          >
            <div className="w-full h-full flex flex-col justify-between">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="object-cover mx-auto w-60"
              />
              <div className="flex flex-col px-4">
                <p className="text-sm text-gray-400">{producto.categoria}</p>
                <h4 className="font-bold text-base">{producto.nombre}</h4>
                <div className="flex flex-row justify-between items-center mt-6 mb-3">
                  <div className="flex flex-row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-yellow-400 mr-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xs text-gray-400 self-center">
                      {producto.puntuacion}
                    </p>
                  </div>
                  <p className="font-bold">{`$ ${producto.precio}`}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Productos;
