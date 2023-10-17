import { Link } from "react-router-dom";
import { dataProductos } from "../data/allData";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Estado inicial (invisible)
      animate={{ opacity: 1 }} // Estado animado (visible)
      exit={{ opacity: 0 }} // Estado de salida (invisible)
    >
      <div
        className="w-full grid md:grid-cols-4 gap-3 px-4 md:px-0 mt-36"
        style={{ height: 450 }}
      >
        <div className="col-span-2 row-span-2 relative">
          <img
            src="https://i.rtings.com/assets/products/Cxz8Hmmj/samsung-odyssey-g4-g40b-s27bg40/design-medium.jpg"
            alt=""
            className="object-cover h-full"
          />
          <p className="text-xl md:text-3xl font-bold absolute bottom-5 left-5 text-white">
            Monitores
          </p>
        </div>

        <div className="row-span-2 relative">
          <img
            src="https://media.karousell.com/media/photos/products/2021/8/17/tiger_esports_eba_1629196882_1e0c9ade.jpg"
            alt=""
            className="object-cover h-full"
          />
          <p className="text-xl md:text-3xl font-bold absolute bottom-5 left-5 text-white">
            Mousepads
          </p>
        </div>

        <div className="grid grid-rows-2 row-span-2 gap-3">
          <div className=" relative">
            <img
              src="https://i.rtings.com/assets/products/lFKKRdTZ/logitech-g-pro-x-superlight/design-medium.jpg"
              alt=""
              className="object-cover h-full"
            />
            <p className="text-xl md:text-3xl font-bold absolute bottom-5 left-5 text-white">
              Mouses
            </p>
          </div>
          <div className=" relative">
            <img
              src="https://i.rtings.com/assets/products/MVMnbcAt/keychron-v-series/design-medium.jpg"
              alt=""
              className="object-cover h-full"
            />
            <p className="text-xl md:text-3xl font-bold absolute bottom-5 left-5 text-white">
              Teclados
            </p>
          </div>
        </div>
      </div>

      <div className="mt-32">
        <div className="flex flex-row justify-between">
          <h3 className="text-sm md:text-xl font-bold px-4 md:px-0 md:mx-0">
            🔥 Productos más vendidos
          </h3>
          <Link
            className="flex flex-row text-gray-500 hover:text-black mr-4 md:mr-0 text-sm items-center"
            to="/productos"
          >
            Ver más
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-2 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </div>
        <div className="grid md:grid-cols-4 mt-10 gap-4 pb-10 mx-4 md:mx-0">
          {dataProductos.slice(0, 4).map((producto) => (
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
                <div className="flex flex-col px-4 mt-2">
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
                    <p className="font-bold">{`$ ${producto.precio.toLocaleString()}`}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
