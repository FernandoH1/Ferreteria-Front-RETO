import React from 'react';
import { useState } from 'react';
const HOST_API = "http://localhost:8080";

const GestionCliente = () => {

    const [nombre, setNombre] = useState();
    const [celular, setCelular] = useState();
    const [ci, setCI] = useState();


    const registrarCliente = (e) => { //registra los clientes cuando hace click en el boton y limpia los campos
        e.preventDefault();

        if (validarDatos) {
            let request = {
                "nombre": nombre,
                "celular": celular,
                "documentoID": ci
            }

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(request)
            };

            fetch(HOST_API + "/cliente", requestOptions)
                .then(response => response.json())
                .then((cliente) => {
                    console.log(cliente);
                });

        }
        e.target.reset();
    }


    const validarDatos = () => {
        if (nombre != undefined && celular != undefined && ci != undefined) {
            return true;
        }
        return false;
    }


    return (<>
        <h1>Gestion Cliente</h1>
        <form onSubmit={registrarCliente} className="gestionFrom">
            <table>
                <tr>
                    <td> <label>Nombre: </label></td>
                    <td><input onChange={event => { setNombre(event.target.value) }}></input></td>
                </tr>
                <tr>
                    <td><label>Celular: </label></td>
                    <td><input onChange={event => { setCelular(event.target.value) }}></input></td>
                </tr>
                <tr>
                    <td> <label>C.I: </label> </td>
                    <td> <input onChange={event => { setCI(event.target.value) }}></input></td>
                </tr>
                <tr>
                    <td colSpan="2"><button className='btn btn-primary' type='submit'>Crear Cliente</button> </td>
                </tr>
            </table>
        </form>
    </>)
}

export default GestionCliente;