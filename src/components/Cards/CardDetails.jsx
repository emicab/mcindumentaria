import { useParams } from 'react-router-dom'
import React from 'react'

import { useMiContexto } from '../context/useContext';

const CardDetails = () => {
    const { id } = useParams();
    const { productoEscuela } = useMiContexto()
    
    const {descripcion, imagen, talles, id: idProdcuto} = productoEscuela.uniforme.find(producto => producto.id === id)
    
    
  return (
    <div>
        <h2>{descripcion}</h2>
        <img src={imagen} alt={descripcion} />
    </div>
  )
}

export default CardDetails