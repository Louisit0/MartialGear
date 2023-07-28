import { Link } from "react-router-dom";

const Productos = () => {
  const productos = [
    {
      id: 1,
      nombre: "Logitech G Pro X Superlight Wireless",
      precio: 85555,
      imagen: "https://cdn.mos.cms.futurecdn.net/t9BZRL4VFPLYNJTLZsCVhP.jpg",
      descripcion: "Mouse superligero, innalambrico, para trabajar y jugar.",
    },
    {
      id: 2,
      nombre: "Samsumg Odyssey G4",
      precio: 159000,
      imagen:
        "https://www.aroged.com/wp-content/uploads/2023/02/Samsung-Odyssey-G4-great-price-for-this-27-and-240.jpg",
      descripcion: "Monitor 1080p, 240hz de 25 pulgadas.",
    },
    {
      id: 3,
      nombre: "HyperX Cloud II",
      precio: 70000,
      imagen:
        "https://assetsio.reedpopcdn.com/hyperx-cloud-ii-df-deal.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
      descripcion: "Headset de calidad, para música y juegos.",
    },
  ];
  return (
    <>
      <div className="flex flex-row">
        <Link className="cursor-pointer" to="/productos">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
        </Link>
        {productos.map((producto) => (
          <Link
            key={producto.id}
            to={`/productos/${producto.id}`}
            className="cursor-pointer w-96 mr-10"
          >
            <div className="mt-10 w-full h-full bg-white  border border-gray-200 shadow-sm rounded-lg">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="rounded-t-lg object-cover"
              />
              <div className="m-4">
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
