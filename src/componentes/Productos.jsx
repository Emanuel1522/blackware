import { useNavigate } from "react-router-dom";
import { productos } from "../servicios/database";
import { useState } from "react";
const tallasDisponibles = ["M", "L", "XL", "XXL"];

const Productos = () => {
    const [tallaSeleccionada, setTallaSeleccionada] = useState("");
    const navigate = useNavigate();

    const productosFiltrados = tallaSeleccionada
        ? productos.filter((producto) => producto.tallas.includes(tallaSeleccionada))
        : productos;

    const verDetalles = (producto) => {
        navigate(`/producto/${producto.slug}`, { state: { producto } });
    };

    return (
        <section className="productos">
            <h2 className="productos-titulo">
                En BLACKWARE encontraras las camisetas de la mayor calidad en los mejores precios!
                <div className="linea"></div>
            </h2>

            <div className="filtro-tallas">
                <label>Filtrar por talla:</label>
                <select
                    value={tallaSeleccionada}
                    onChange={(e) => setTallaSeleccionada(e.target.value)}
                >
                    <option value="">Todas</option>
                    {tallasDisponibles.map((talla) => (
                        <option key={talla} value={talla}>{talla}</option>
                    ))}
                </select>
            </div>

            <div className="grid-productos">
                {productosFiltrados.map((producto) => (
                    <div key={producto.id} className="producto">
                        <img src={producto.imagen} alt={producto.nombre} className="producto-img" />
                        <p className="producto-nombre">{producto.nombre}</p>
                        <p className="producto-nombre">${producto.precio.toLocaleString()}</p>

                        <button
                            onClick={() => verDetalles(producto)}
                            className="producto-pedido"
                        >
                            Ver detalles
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Productos;