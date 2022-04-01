import React from "react";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import GestionCliente from "../page/GestionCliente";
import GestionProducto from "../page/GestionProducto";
import GestionProveedor from "../page/GestionProveedor";
import GestionStock from "../page/GestionStock";
import GestionVenta from "../page/GestionVenta";
import HistorialVentas from "../page/HistorialVentas";


function AdminView() {
  return <div>
  <h1>Hola, admin</h1>
  <div>
  <BrowserRouter>
  <nav>

    <ul>
      <li>
      <Link to="/AddCliente">Añadir Cliente</Link>
      </li>
      <li>
      <Link to="/AddProducto">Añadir Producto</Link>
      </li>
      <li>
      <Link to="/AddProveedor">Añadir Proveedor</Link>
      </li>
    </ul>

    <ul>
    <li>
      <Link to="/">Gestion Venta</Link>
      </li>
      <li>
      <Link to="/GestionStock">Gestion Stock</Link>
      </li>
      <li>
      <Link to="/historialVentas">Historial Ventas</Link>
      </li>
    </ul>

  </nav>
      <Routes>
      <Route path="/" element={<GestionVenta />} />
      <Route path="/AddCliente" element={<GestionCliente />} />
      <Route path="/AddProducto" element={<GestionProducto />} />
      <Route path="/AddProveedor" element={<GestionProveedor/>} />
      <Route path="/GestionStock" element={<GestionStock />} />
      <Route path="/historialVentas" element={<HistorialVentas />} />
    </Routes>
  </BrowserRouter>
  </div>
  </div>
}

export default AdminView;
