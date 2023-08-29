const Carrito = ({ carritoItems }) => {
  return (
    <div className="w-full h-full mt-32 relative">
      <h2 className="text-4xl font-bold">Carrito de Compras</h2>
      <ul>
        {carritoItems.map((producto) => (
          <div key={producto.id} className="w-full h-full">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="object-cover mx-auto"
            />
            <div className="flex flex-col px-4">
              <h4 className="font-bold">{producto.nombre}</h4>
              <p className="my-4 text-sm">{producto.descripcion}</p>
              <p className="text-green-600">{`$ ${producto.precio}`}</p>
            </div>
          </div>
        ))}
        //Haz esto https://www.madkat.store/es/tienda/carro/
      </ul>
    </div>
  );
};

export default Carrito;
