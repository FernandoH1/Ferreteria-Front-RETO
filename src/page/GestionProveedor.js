import React from 'react';
import { useState } from 'react';
const HOST_API = "http://localhost:8080";

const GestionProveedor = () => {

    const [nombre, setNombre] = useState();
    const [celular, setCelular] = useState();
    const [ci, setCI] = useState();
    

    const registrarProveedor = (e) => { //registra los clientes cuando hace click en el boton y limpia los campos
        e.preventDefault();

            if(validarDatos){   
            let request = {
                "nombre":nombre,
                "celular":celular,
                "documentoID":ci
            }
            
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(request)
            };

            fetch(HOST_API + "/proveedor", requestOptions)
            .then(response => response.json())
            .then((proveedor) => {
                console.log(proveedor);
            });

            }
            e.target.reset();
        }
    

    const validarDatos = () => {
        if(nombre!= undefined && celular!= undefined && ci!= undefined){
            return true;
        }
        return false;
    }


    return  <>
    <h1>Gestion Proveedor</h1>
    <form onSubmit={registrarProveedor}>
        <label>Nombre</label>
        <input onChange={ event => {setNombre(event.target.value)}}></input>

        <label>Celular</label>
        <input onChange={ event => {setCelular(event.target.value)}}></input>
           
        <label>C.I.</label>
        <input onChange={ event => {setCI(event.target.value)}}></input>
        <button className='btn btn-primary' type='submit'>Crear Proveedor</button>
    </form>
    </> 
}
 
export default GestionProveedor;