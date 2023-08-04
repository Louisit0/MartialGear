import { Link } from "react-router-dom";
import { dataProductos } from "../data/allData";

const Productos = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 mt-36">
        {dataProductos.map((producto) => (
          <Link
            key={producto.id}
            to={`/productos/${producto.id}`}
            className="cursor-pointer"
          >
            <div className="h-full bg-white border border-gray-200 shadow-sm rounded-lg">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="rounded-t-lg object-cover"
              />
              <div className="m-4 px-4">
                <h4 className="font-bold">{producto.nombre}</h4>
                <p className="my-4 text-sm">{producto.descripcion}</p>
                <p className="text-green-600">{`$ ${producto.precio}`}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Productos;
