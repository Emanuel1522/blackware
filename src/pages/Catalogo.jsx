import Encabezado from "../componentes/Encabezado"
import Productos from "../componentes/Productos"
import Footer from "../componentes/Footer"

const Catalogo = () => {
    return (
        <>
            <Encabezado />
            <main>
                <Productos />
            </main>
            <Footer />
        </>
    )
}

export default Catalogo;