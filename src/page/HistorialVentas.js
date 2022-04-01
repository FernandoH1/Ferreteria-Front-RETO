import React from 'react';
import { useEffect, useState } from 'react';
import Factura from '../components/Factura';
const HOST_API = "http://localhost:8080";
const HistorialVentas = () => {
    const [facturas,setFacturas] = useState([]);

    useEffect(()=>{
        cargarFacturas();

    },[]);

    const cargarFacturas = ()=>{
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(HOST_API + "/factura", requestOptions)
            .then(response => response.json())
            .then((p) => {
            //  console.log(p);
                setFacturas(p);
                
            });
    }
    return ( 
        <div> Ventas
            {facturas.map( factura =>(
                 <Factura key={factura.consecutivo_de_facturas}
                    facture={factura}

                 /> 
            ))}
          
        </div>
    );
}
 
export default HistorialVentas;