import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { dataProductos } from "../../data/allData";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductoDetalle = ({ carritoItems, setCarritoItems }) => {
  const { productosId } = useParams();
  const navigate = useNavigate();
  const producto = dataProductos.find(
    (producto) => producto.id === parseInt(productosId)
  );

  const handleButtonClick = () => {
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
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      onClick: () => {
        navigate("/carrito"); // Cambia "/carrito" por la ruta real de tu carrito
      },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} // Estado inicial (invisible)
      animate={{ opacity: 1 }} // Estado animado (visible)
      exit={{ opacity: 0 }} // Estado de salida (invisible)
    >
      <div className="w-full flex justify-center items-center h-screen">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="object-cover w-2/3 mx-auto md:h-full md:w-full"
            />
          </div>
          <div className="w-full md:w-1/2 bg-gray-50 p-10 px-10">
            <div className="flex flex-col justify-center h-full">
              <Link
                to="/productos"
                className="mb-10 w-8 flex justify-start items-center"
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
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </Link>
              <p className="text-gray-400">{producto.categoria}</p>
              <h2 className="font-bold text-3xl mb-4">{producto.nombre}</h2>
              <p className="text-gray-500">{producto.descripcion}</p>
              <div className="flex flex-row justify-between w-4/5 md:w-1/2 mt-4">
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
                  <p className="text-gray-400">{producto.puntuacion}</p>
                </div>
                <p>-</p>

                <p className="font-bold">${producto.precio.toLocaleString()}</p>
              </div>
              <Link
                to="/carrito"
                className="p-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-bold mt-10 md:w-1/2 text-center flex flex-row items-center gap-2 justify-center"
                onClick={handleButtonClick}
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
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                Añadir al carrito
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductoDetalle;
