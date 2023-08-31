import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate, Link } from "react-router-dom";

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
    if (carritoItems.length === 0) {
      console.log("carrito vacio");
    } else {
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
    }
  };

  useEffect(() => {
    const calculatedTotal = carritoItems.reduce(
      (acc, producto) => acc + producto.precio * producto.cantidad,
      0
    );
    setTotal(calculatedTotal);
  }, [carritoItems]);

  return (
    <>
      {carritoItems.length === 0 ? (
        <div className="w-1/2 h-screen relative flex flex-col mx-auto items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-20 h-20 text-gray-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          <h2 className="text-3xl font-bold w-2/3 text-center mt-8">
            Tu carrito parece vacío
          </h2>
          <p className="mt-4 mb-8 text-sm">Agregue artículos a su carrito.</p>
          <Link
            to="/productos"
            className="p-4 bg-black text-white w-2/3 font-bold text-center"
          >
            Seguir comprando
          </Link>
        </div>
      ) : (
        <div className="w-full h-full mt-32 relative">
          <h2 className="text-4xl font-bold">Su carrito</h2>
          <div className="flex flex-row justify-between mt-10">
            <div className="flex flex-col w-3/5">
              <p>{carritoItems.length === 0 ? "El carrito esta vacío" : ""}</p>
              {carritoItems.map((producto) => (
                <div key={producto.id} className="h-full flex flex-col">
                  <div className="flex flex-row">
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="object-cover mr-8 h-36"
                      width={144}
                    />

                    <div className="flex flex-col p-4 justify-between w-full">
                      <div className="flex justify-between">
                        <div className="flex flex-col">
                          <h4 className="font-bold">{producto.nombre}</h4>
                          <p className="text-sm">{producto.descripcion}</p>
                        </div>
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
                  <hr className="my-9 bg-black" />
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
      )}
    </>
  );
};

export default Carrito;
