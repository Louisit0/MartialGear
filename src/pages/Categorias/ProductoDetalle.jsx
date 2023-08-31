import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { dataProductos } from "../../data/allData";
import { useState } from "react";

const ProductoDetalle = ({
  notificationCount,
  setNotificationCount,
  carritoItems,
  setCarritoItems,
}) => {
  const [cant, setCant] = useState(1);
  const { productosId } = useParams();
  const producto = dataProductos.find(
    (producto) => producto.id === parseInt(productosId)
  );

  const [precioTotal, setPrecioTotal] = useState(producto.precio);

  const aumentarCant = () => {
    if (cant < producto.stock) {
      setCant((prevCant) => prevCant + 1);
      setPrecioTotal((prevPrecioTotal) => prevPrecioTotal + producto.precio);
    }
  };

  const disminuirCant = () => {
    if (cant > 1) {
      setCant((prevCant) => prevCant - 1);
      setPrecioTotal((prevPrecioTotal) => prevPrecioTotal - producto.precio);
    }
  };

  const handleButtonClick = () => {
    setNotificationCount(notificationCount + 1);

    // Verificar si el producto ya está en el carrito
    const existingProduct = carritoItems.find(
      (item) => item.id === producto.id
    );

    if (existingProduct) {
      // Actualizar la cantidad del producto existente
      const updatedCart = carritoItems.map((item) =>
        item.id === existingProduct.id
          ? { ...item, cantidad: item.cantidad + 1 } // Actualizar la cantidad
          : item
      );
      setCarritoItems(updatedCart);
    } else {
      // Agregar el producto al carrito
      setCarritoItems((prevItems) => [
        ...prevItems,
        { ...producto, cantidad: 1 },
      ]);
    }

    toast.success("¡Producto añadido al carrito!", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="w-full h-full mt-32 relative">
      <div className="flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="object-cover h-full"
          />
        </div>
        <div className="w-full md:w-1/2 bg-gray-200 py-20 px-10">
          <h2 className="font-bold text-3xl mb-4">{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          <div className="flex flex-col md:flex-row items-center justify-between mt-10">
            <p className="font-bold text-xl">Cantidad:</p>
            <div className="flex flex-row">
              <button
                className="p-2 bg-white border border-black"
                onClick={disminuirCant}
              >
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
              <p className="py-2 px-4 bg-gray-300y border border-black">
                {cant}
              </p>
              <button
                className="p-2 bg-white border border-black"
                onClick={aumentarCant}
              >
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
            <p className="font-bold text-xl">{`$ ${precioTotal}`}</p>
          </div>
          <button
            className="p-4 bg-red-700 text-white uppercase mt-10"
            onClick={handleButtonClick}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle;
