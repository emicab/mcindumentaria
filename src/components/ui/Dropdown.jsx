import React, { useState } from 'react'
import { ChevronDownIcon } from "@heroicons/react/24/solid"
import { obtenerNombreEscuela } from '../controllers/getData'
import { useMiContexto } from '../context/useContext'

const Dropdown = ({ classes, placeholder}) => {
    const [open, setOpen ] = useState(false)
    const [selected, setSelected] = useState(null)

    const nombreEscuelas = obtenerNombreEscuela()
    const { setEscuela } = useMiContexto()


    const handleSelect = e => {
        setEscuela(e.target.value)
    }

    return (
        <div className={classes}>
            <div onClick={() => setOpen(!open)} className="flex p-3 my-2 text-blue-500 bg-slate-200 rounded justify-between sm:items-center">
                <span>{selected || placeholder}</span>
                <ChevronDownIcon className="w-5 stroke-2" />
            </div>
            <div className={`flex flex-col w-full absolute border-2 border-blue-500 bg-slate-50 rounded overflow-y-auto transition-all ${open ? 'max-h-60 ' : "max-h-0 border-none"}`}>
                <ul>
                    {
                        nombreEscuelas.map((nombre, index) => (
                            <li key={index} className="p-2 hover:bg-blue-400 hover:text-slate-50" onClick={() => {
                                setSelected(nombre)
                                setOpen(!open)
                                handleSelect({ target: { value: nombre } });
                            }}>
                                {nombre}
                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    )
}

export default Dropdown