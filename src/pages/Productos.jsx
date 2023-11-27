import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { dataProductos } from "../data/allData";
import Tabs from "../components/Tabs";
import { motion } from "framer-motion";

const Productos = ({ tabState, setTabState }) => {
  const [isLoading, setIsLoading] = useState(true);

  const productosFiltrados = dataProductos.filter(
    (producto) => producto.categoria === tabState
  );

  const productosAVisualizar =
    tabState === "" ? dataProductos : productosFiltrados;

  return (
    <motion.div
      initial={{ opacity: 0 }} // Estado inicial (invisible)
      animate={{ opacity: 1 }} // Estado animado (visible)
      exit={{ opacity: 0 }} // Estado de salida (invisible)
    >
      <div className="flex flex-col my-20">
        <Tabs tabState={tabState} setTabState={setTabState} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
          {productosAVisualizar.map((producto) => (
            <motion.div
              key={producto.id}
              className="cursor-pointer bg-white border border-gray-200 shadow-sm hover:shadow rounded-lg"
              initial={{ opacity: 0 }} // Estado inicial (invisible)
              animate={{ opacity: 1 }} // Estado animado (visible)
              exit={{ opacity: 0 }} // Estado de salida (invisible)
            >
              <Link to={`/productos/${producto.id}`}>
                <div className="w-full h-full flex flex-col justify-between">
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className={`object-cover mx-auto w-60 ${
                      isLoading ? "hidden" : ""
                    }`}
                    onLoad={() => setIsLoading(false)}
                  />
                  {isLoading && (
                    <div className="w-full h-60 animate-pulse bg-slate-200 rounded"></div>
                  )}
                  <div className="flex flex-col px-4">
                    <p className="text-sm text-gray-400">
                      {producto.categoria}
                    </p>
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
                      <p className="font-bold">{`$ ${producto.precio.toLocaleString()}`}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Productos;
