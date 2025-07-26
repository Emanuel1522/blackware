import Encabezado from '../componentes/Encabezado'
import Footer from '../componentes/Footer'
import Inicio from '../componentes/Inicio'
import Nosotros from '../componentes/Nosotros'

function Home() {

  return (
    <>
      <Encabezado />
      <main>
        <Inicio />
        <Nosotros />
      </main>
      <Footer />
    </>
  )
}

export default Home
