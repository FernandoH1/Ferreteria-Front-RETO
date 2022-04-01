import React from 'react';

const ProductoSinStock = (props) => {  
    return <div className='producto'>
        <label>nombre: {props.producto.nombre}</label>
        <label>Precio:{props.producto.precio} $</label>
        <label>Stock: {props.producto.cantidad}</label>
       
    </div>
    
}
export default ProductoSinStock;