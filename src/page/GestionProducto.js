import React from 'react';
import { useState, useEffect } from 'react';

const HOST_API = "http://localhost:8080";

const GestionProducto = () => {

    const [nombre, setNombre] = useState();
    const [cantidad, setCantidad] = useState();
    const [precio, setPrecio] = useState();
    const [proveedor, setProveedor] = useState();
    const [proveedores, setProveedores] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(HOST_API + "/proveedor", requestOptions)
            .then(response => response.json())
            .then((proveedores) => {
               setProveedores(proveedores);
               setProveedor(proveedores[0].id);
            });
    }, []);


    
    const registrarProducto = (e) => { //registra los clientes cuando hace click en el boton y limpia los campos
        e.preventDefault();
    
        let p = proveedores.find(provedor => provedor.id == proveedor);
       
        if (validarDatos) {

            let request = {
                "nombre": nombre,
                "cantidad": cantidad,
                "precio": precio,
                "proveedor":p
            }

           const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(request)
            };

            fetch(HOST_API + "/producto", requestOptions)
                .then(response => response.json())
                .then((producto) => {
                    console.log(producto);
                });

        }
        e.target.reset();
    }


    const validarDatos = () => {
        if (nombre != undefined && cantidad != undefined && precio != undefined) {
            return true;
        }
        return false;
    }


    return (<>
        <h1>Gestion Praducto</h1>
        <form onSubmit={registrarProducto}>
            <label>Nombre: </label>
            <input onChange={event => { setNombre(event.target.value) }}></input>

            <label>Cantidad: </label>
            <input onChange={event => { setCantidad(event.target.value) }}></input>

            <label>Precio: </label>
            <input onChange={event => { setPrecio(event.target.value) }}></input>

            <label>Proveedor: </label>
            <select onChange={event => { setProveedor(event.target.value)}}>
                {proveedores.map(proveedor => (
                  
                    <option key={proveedor.id} value={proveedor.id}>{proveedor.nombre}</option>
                ))}
            </select>
            <br></br>
            <button className='btn btn-primary' type='submit'>Registrar Producto</button>
        </form>
    </>)
}

export default GestionProducto;