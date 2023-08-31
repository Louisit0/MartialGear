import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

const MySwal = withReactContent(Swal);

const Carrito = ({
  carritoItems,
  setCarritoItems,
  notificationCount,
  setNotificationCount,
}) => {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);

  const deleteProduct = (productId) => {
    const productToDelete = carritoItems.find(
      (producto) => producto.id === productId
    );

    if (productToDelete) {
      const updatedCart = carritoItems.filter(
        (producto) => producto.id !== productId
      );

      setCarritoItems(updatedCart);

      setNotificationCount(notificationCount - productToDelete.cantidad);
    }
  };

  const comprar = () => {
    MySwal.fire({
      title: <strong>Compra realizada</strong>,
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      setCarritoItems([]);
      setNotificationCount(0);
      navigate("/");
    });
  };

  useEffect(() => {
    const calculatedTotal = carritoItems.reduce(
      (acc, producto) => acc + producto.precio * producto.cantidad,
      0
    );
    setTotal(calculatedTotal);
  }, [carritoItems]);

  return (
    <div className="w-full h-full mt-32 relative">
      <h2 className="text-4xl font-bold">Su carrito</h2>
      <div className="flex flex-row justify-between mt-10">
        <div className="flex flex-col">
          {carritoItems.map((producto) => (
            <div key={producto.id} className="h-full flex flex-row">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="object-cover mr-8"
                width={200}
              />
              <div className="flex flex-col p-4 justify-between w-full">
                <div className="flex justify-between">
                  <h4 className="font-bold w-3/4">{producto.nombre}</h4>
                  <button
                    className="h-6 w-6"
                    onClick={() => deleteProduct(producto.id)}
                  >
                    x
                  </button>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm">Cantidad: {producto.cantidad}</p>
                  <p className="font-bold">{`$ ${producto.precio}`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-1/3 px-4">
          <div className="flex justify-between">
            <span className="font-bold">Total:</span>
            <span className="font-bold">{`$ ${total.toFixed(2)}`}</span>
          </div>
          <button
            className="py-4 px-14 bg-black text-white font-bold mt-6"
            onClick={comprar}
          >
            Finalizar pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
