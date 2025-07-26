import { useState } from "react";

const Footer = () => {
    const [modalAbierto, setModalAbierto] = useState(false);


    return (
        <footer className="footer">
            <div className="contenedor-footer-completo">
                <div className="footer-container">
                    <div className="footer-info">
                        <h2>CONTÁCTANOS</h2>
                        <p>
                            <br />Whatsapp: 3013164185 <br /><br />
                            Gmail: blackwarepulse@gmail.com
                        </p>
                    </div>
                    <div className="footer-info">
                        <h2>REDES</h2>
                        <p>
                            <br />Instagram: @blackware.co_ <br /><br />
                            Facebook: Blackware <br /><br />
                            TikTok: @Blackware_oficial
                        </p>
                    </div>
                </div>

                <div className="footer-sugerencias">
                    <h2>
                        Para nosotros es muy importante que los usuarios tengan la mejor
                        experiencia. Recibimos todos sus comentarios aquí mismo.
                    </h2>
                    <button onClick={() => setModalAbierto(true)}>Dejar mensaje</button>
                </div>

                {modalAbierto && (
                    <div className="modal">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();

                                const formData = new FormData(e.target);

                                fetch("https://formsubmit.co/ajax/blackwarepulse@gmail.com", {
                                    method: "POST",
                                    body: formData,
                                })
                                    .then((response) => {
                                        if (response.ok) {
                                            alert("✅ ¡Mensaje enviado con éxito!");
                                            setModalAbierto(false); // cerrar modal
                                            e.target.reset(); // limpiar formulario
                                        } else {
                                            alert("❌ Ocurrió un error al enviar el mensaje.");
                                        }
                                    })
                                    .catch(() =>
                                        alert("❌ No se pudo conectar con el servidor.")
                                    );
                            }}
                            className="modal-contenido"
                        >
                            <h3>Deja tu comentario</h3>

                            <textarea
                                name="mensaje"
                                placeholder="Escribe aquí tu mensaje..."
                                required
                            ></textarea>

                            <div className="modal-botones">
                                <button type="button" onClick={() => setModalAbierto(false)}>
                                    Cancelar
                                </button>
                                <button type="submit" name="submit" className="enviar">
                                    Enviar
                                </button>
                            </div>
                            <input type="hidden" name="_captcha" value="false" />
                        </form>
                    </div>
                )}
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Blackware Pulse – Todos los derechos reservados</p>
            </div>
        </footer>
    )
}

export default Footer;