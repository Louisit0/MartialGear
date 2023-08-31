import { useState, useEffect } from "react";
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
    <div className="flex flex-col mt-36">
      <Tabs tabState={tabState} setTabState={setTabState} />
      <div className="grid md:grid-cols-3 gap-4 mx-4 md:mx-0">
        {productosAVisualizar.map((producto) => (
          <Link
            key={producto.id}
            to={`/productos/${producto.id}`}
            className="cursor-pointer bg-white border border-gray-200 shadow-sm rounded-lg"
          >
            <div className="w-full h-full">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="object-cover mx-auto"
              />
              <div className="flex flex-col px-4">
                <h4 className="font-bold">{producto.nombre}</h4>
                <p className="my-4 text-sm">{producto.descripcion}</p>
                <p>{`$ ${producto.precio}`}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Productos;
