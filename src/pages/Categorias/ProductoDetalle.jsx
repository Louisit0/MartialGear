import { Link, useParams } from "react-router-dom";
const ProductoDetalle = () => {
  // Obtener el parámetro de la URL (productosId)
  const { productosId } = useParams();

  return (
    <div>
      <h2>Detalles del producto con ID {productosId}</h2>
    </div>
  );
};

export default ProductoDetalle;
