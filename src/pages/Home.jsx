import { Link } from "react-router-dom";
import { dataProductos } from "../data/allData";

const Home = () => {
  return (
    <>
      <div className="mt-32">
        <div
          className="w-full grid md:grid-cols-4 gap-3 px-4 md:px-0"
          style={{ height: 450 }}
        >
          <div className="col-span-2 row-span-2 relative">
            <img
              src="https://i.rtings.com/assets/products/Cxz8Hmmj/samsung-odyssey-g4-g40b-s27bg40/design-medium.jpg"
              alt=""
              className="object-cover h-full"
            />
            <p className="text-3xl font-bold absolute bottom-5 left-5 text-white">
              Monitores
            </p>
          </div>

          <div className="row-span-2 relative">
            <img
              src="https://media.karousell.com/media/photos/products/2021/8/17/tiger_esports_eba_1629196882_1e0c9ade.jpg"
              alt=""
              className="object-cover h-full"
            />
            <p className="text-3xl font-bold absolute bottom-5 left-5 text-white">
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
              <p className="text-3xl font-bold absolute bottom-5 left-5 text-white">
                Mouses
              </p>
            </div>
            <div className=" relative">
              <img
                src="https://i.rtings.com/assets/products/MVMnbcAt/keychron-v-series/design-medium.jpg"
                alt=""
                className="object-cover h-full"
              />
              <p className="text-3xl font-bold absolute bottom-5 left-5 text-white">
                Teclados
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32">
        <h3 className="text-xl font-bold mx-4 md:mx-0">
          🔥 Productos más vendidos
        </h3>
        <div className="grid md:grid-cols-4 mt-10 gap-4 pb-10 mx-4 md:mx-0">
          {dataProductos.map((producto) => (
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
    </>
  );
};

export default Home;
