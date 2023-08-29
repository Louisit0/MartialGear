import React from "react";
import { dataProductos } from "../data/allData";
const Cart = ({ carrito }) => {
  return (
    <div>
      {carrito.map((producto) => (
        <div key={producto.id}>
          <img src={producto.imagen} alt={producto.nombre} />
          <h2 className="font-bold">{producto.nombre}</h2>
          <p className="text-sm my-3">{producto.descripcion}</p>
          <p className="text-green-600">$ {producto.precio}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
