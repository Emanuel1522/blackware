import { useNavigate } from "react-router-dom"
import { productos } from "../servicios/database.js"

const Inicio = () => {
    let redireccion = useNavigate();

    let destacados = productos.filter(producto =>
        [5420, 5907, 4441].includes(producto.id)
    );

    return (
        <section className="inicio">
            <h2 className="inicio-titulo">
                Una prenda que te gusta, es tu mejor inversión.
                <div className="linea"></div>
            </h2>
            <h2 className="inicio-subtitulo">
                Prendas destacadas!
            </h2>
            <div className="inicio-imagenes">
                <div className="imagenes-scroll">
                    {destacados.map(producto => (
                        <img
                            key={producto.id}
                            src={producto.imagen}
                            alt={producto.nombre}
                            className="hero-imagen"
                            onClick={() => redireccion(`/producto/${producto.id}`, { state: { producto } })}
                            style={{ cursor: "pointer" }}
                        />
                    ))}
                </div>
            </div>
            <button onClick={() => { redireccion("/productos") }} className="boton-inicio">VER CATALOGO</button>
        </section>
    )
}
export default Inicio