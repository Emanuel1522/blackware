const Nosotros = () => {
    return (
        <section id="sobre-nosotros" className="productos">
            <h2 className="productos-titulo">
                ¿Quienes somos?
                <div className="linea"></div>
            </h2>
            <p className="nosotros-texto">
                Blackware Pulse nace con una visión clara: ofrecer camisetas urbanas de alta calidad, con diseños modernos y auténticos que representen el estilo y la actitud de quienes saben lo que quieren.
                <br />
                <br />
                Creemos que la ropa no solo cubre, comunica quién eres. Por eso, cada una de nuestras prendas está pensada para marcar diferencia.
            </p>
            <div className="tarjetas-container">
                <div className="tarjetas-container-item">
                    <h2>🎯 Mision</h2>
                    <p>Brindar camisetas con diseño, calidad y presencia, que reflejen el estilo de vida de jóvenes que buscan destacar con autenticidad y confianza.</p>
                </div>
                <div className="tarjetas-container-item">
                    <h2>👁️ Vision</h2>
                    <p>Ser una marca referente de moda urbana a nivel nacional e internacional, destacando por nuestro enfoque en calidad, atención personalizada y conexión con nuestros clientes.</p>
                </div>
                <div className="tarjetas-container-item">
                    <h2>🧩 Valores</h2>
                    <p>
                        - Calidad premium <br /><br />
                        - Autenticidad <br /><br />
                        - Cercanía con el cliente <br /><br />
                        - Detalles que marcan la diferencia
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Nosotros;