import React from 'react';
import Producto from './Producto';
import ProductoSinStock from './ProductoSinStock';
const Factura = (props) => {
  
    return (  
        <div className='factura'>
           <dato>
            <titutlo> Fecha:  </titutlo>
            <contenido>{props.facture.fecha}</contenido>
           </dato>
         
           <dato>
           <titutlo>Nombre: </titutlo>
           <contenido>   {props.facture.nombreCliente.nombre} </contenido>
           <titutlo>  CI:  </titutlo>
           <contenido>     {props.facture.nombreCliente.documentoID} </contenido>
              
            </dato>
            <dato>
                <titutlo> Atencion Cliente:</titutlo>
                <contenido> {props.facture.atencionCliente}</contenido>
            </dato>
            <dato>
                <titutlo>Precio total:</titutlo>
                <contenido> {props.facture.totalPago}</contenido>
            </dato>
               
          
            <h3>
               
            </h3>
            {props.facture.productosPagos.map(p =>(
                <ProductoSinStock key= {p.id}
                 producto={p}
                />
            ))

            }
            
        </div>
    );
}
 
export default Factura;