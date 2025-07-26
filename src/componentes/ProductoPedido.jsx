import { useParams, useLocation } from 'react-router-dom';
import { productos } from '../servicios/database';
import { useState, useEffect } from 'react';

const ProductoPedido = () => {
  const { slug } = useParams();
  const location = useLocation();
  const [producto, setProducto] = useState(location.state?.producto);
  const [talla, setTalla] = useState('');

  useEffect(() => {
    if (!producto) {
      const p = productos.find(p => p.slug === slug);
      setProducto(p);
    }
  }, [slug, producto]);

  if (!producto) return <div className="cargando">Cargando...</div>;

  const linkWhatsapp = `https://wa.me/573013164185?text=Hola,%20quiero%20la%20${producto.id}%20talla%20${talla}`;

  return (
    <section className="producto-detalle">
      <p className="aviso-envio">Recuerda que tenemos promoción con envío gratis por tiempo limitado</p>

      <div className="detalle-contenido">
        <img src={producto.imagen} alt={producto.nombre} className="detalle-img" />

        <div className="detalle-info">
          <h1>{producto.nombre}</h1>
          <p>${producto.precio.toLocaleString()}</p>

          <p className="label-talla">Selecciona la talla</p>
          <div className="tallas">
            {['M', 'L', 'XL', 'XXL'].map(t => (
              <button
                key={t}
                className={`talla ${talla === t ? 'seleccionada' : ''}`}
                onClick={() => setTalla(t)}
              >
                {t}
              </button>
            ))}
          </div>

          <p className="proximamente">Próximamente integraremos el pago en línea !!!</p>

          <a
            href={talla ? linkWhatsapp : '#'}
            className={`btn-whatsapp ${!talla ? 'deshabilitado' : ''}`}
            onClick={(e) => { if (!talla) e.preventDefault(); }}
          >
            Realizar pedido por WhatsApp
          </a>

          <a href="/guia-tallas" target="_blank" className="guia-tallas">
            Guía de tallas
          </a>

          <p class="opiniones">⭐⭐⭐⭐☆ (4.8 / 5) · 128 ventas esta semana</p>
        </div>
      </div>
    </section>
  );
};

export default ProductoPedido;