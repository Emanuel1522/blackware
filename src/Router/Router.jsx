import Home from '../pages/Home.jsx';
import Catalogo from '../pages/Catalogo.jsx';
import ProductoDetalle from '../pages/ProductoDetalle.jsx';

export let Router = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/productos",
        element: <Catalogo />
    },
    {
        path: "/producto/:id", 
        element: <ProductoDetalle />
    }
];