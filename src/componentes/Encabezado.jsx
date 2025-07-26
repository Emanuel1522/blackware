import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Encabezado = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuAbierto && menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuAbierto(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuAbierto]);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  }

  const cerrarMenu = () => {
    setMenuAbierto(false);
  }

  const irAInicio = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const irAProductos = () => {
    navigate("/productos");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const irANosotros = () => {
    const scrollASeccion = () => {
      const seccion = document.getElementById("sobre-nosotros");
      if (seccion) {
        seccion.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          window.scrollBy({ top: -40, behavior: "smooth" });
        }, 700);
      }
    };

    if (location.pathname === "/") {
      scrollASeccion();
    } else {
      navigate("/");
      setTimeout(scrollASeccion, 300);
    }
  };


  return (
    <>
      <div style={{ height: isScrolled ? '120px' : '100px' }}></div>

      <header ref={menuRef} className={`encabezado ${isScrolled ? 'shrink' : ''}`}>
        <button className="menu-hamburguesa" onClick={toggleMenu}>
          ☰
        </button>
        <div>
          <nav ref={menuRef} className={`menu-nav ${menuAbierto ? "abierto" : ""}`}>
            <ul className="lista-encabezado">
              <li className='lista-item-encabezado'>
                <button onClick={irAInicio} className="boton-link">INICIO</button>
              </li>
              <li className='lista-item-encabezado'>
                <button onClick={irAProductos} className="boton-link">PRODUCTOS</button>
              </li>
              <li className='lista-item-encabezado'>
                <button onClick={irANosotros} className="boton-link">NOSOTROS</button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="logo-container">
          <img src="/src/assets/logo.png" alt="Logo" className="logo" />
        </div>
      </header>
    </>
  );
}
export default Encabezado;  