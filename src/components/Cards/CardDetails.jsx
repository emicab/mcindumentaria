import { useParams } from 'react-router-dom'
import React from 'react'
import { obtenerIdProducto } from '../controllers/getData';
import { useMiContexto } from '../context/useContext';

const CardDetails = () => {
    const { id } = useParams();
    const { escuela, productoEscuela, setProductoEscuela } = useMiContexto()

    const producto = obtenerIdProducto(id)
  return (
    <div>{producto.nombre}</div>
  )
}

export default CardDetails