import { useState } from 'react'
import Dropdown from './ui/Dropdown'
import { obtenerNombreEscuela } from './controllers/getData'
import CardSchool from './Cards/CardSchool'
import { useMiContexto } from './context/useContext'



const Uniformes = () => {
    
    return (
        <>
            <Dropdown  classes="w-11/12 mx-auto sm:w-2/4 relative sm:mx-auto " placeholder={"Seleccioná tu colegio"} />
            <CardSchool  />
        </>
    )
}

export default Uniformes
