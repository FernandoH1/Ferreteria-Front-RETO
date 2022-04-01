import React from "react";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import GestionCliente from "../page/GestionCliente";
import GestionProducto from "../page/GestionProducto";
import GestionProveedor from "../page/GestionProveedor";
import GestionStock from "../page/GestionStock";
import GestionVenta from "../page/GestionVenta";
import HistorialVentas from "../page/HistorialVentas";


function AdminView() {
  return <div className="menu">
  <header>
  <nav>
    <ul>
      <li>Añadir
        <ul>
            <li> <a href="/AddCliente">Añadir Cliente</a></li>
            <li> <a href="/AddProducto">Añadir Producto</a> </li>
            <li><a href="/AddProveedor">Añadir Proveedor</a></li>
        </ul>
        </li>
      <li>Gestion
      <ul>
            <li><a href="/">Gestion Venta</a></li>
            <li><a href="/GestionStock">Gestion Stock</a></li>
    </ul> 
    </li>
      <li><a href="/historialVentas">Historial Ventas</a> </li>
    </ul>
    </nav>
   </header>
  <div className="ventanaSecundaria">
  <BrowserRouter>

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
