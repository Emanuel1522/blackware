import { useNavigate } from "react-router-dom"

const Inicio = () => {
    let redireccion = useNavigate();

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
                <img src="/productos/IMG_2049.jpg" alt="" className="hero-imagen" />
                <img src="/productos/IMG_4431.jpg" alt="" className="hero-imagen" />
                <img src="/productos/IMG_9932.jpg" alt="" className="hero-imagen" />
            </div>
            <button onClick={()=>{redireccion("/productos")}} className="boton-inicio">VER CATALOGO</button>
        </section>
    )
}
export default Inicio