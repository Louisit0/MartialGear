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
              <p>{producto.descripcion}</p>
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
                className="p-4 bg-black text-white uppercase font-bold mt-10 md:w-1/2 text-center"
                onClick={handleButtonClick}
              >
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
