import { useParams } from "react-router-dom";
import { dataProductos } from "../../data/allData";

const ProductoDetalle = () => {
  // Obtener el parámetro de la URL (productosId)
  const { productosId } = useParams();

  const producto = dataProductos.find(
    (producto) => producto.id === parseInt(productosId)
  );

  return (
    <div className="w-full h-full mt-32 relative">
      <h2 className="font-bold text-2xl left-80 mb-3">
        Detalles del producto con ID {productosId}
      </h2>
      <div className="flex flex-row gap-4">
        <div className="w-1/2">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="object-cover h-full"
          />
        </div>
        <div className="w-1/2 bg-gray-200 py-20 px-10">
          <p>{producto.descripcion}</p>
          <div className="flex flex-row items-center justify-between mt-10">
            <p className="font-bold text-xl">Quantity</p>
            <div className="flex flex-row">
              <button className="p-2 bg-white border border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 12H6"
                  />
                </svg>
              </button>
              <p className="py-2 px-4 bg-gray-300y border border-black">1</p>
              <button className="p-2 bg-white border border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              </button>
            </div>
            <p className="font-bold text-xl">{`$ ${producto.precio}`}</p>
          </div>
          <button className="p-4 bg-red-700 text-white uppercase mt-10">
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle;
